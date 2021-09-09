<script lang="ts">
  import { onDestroy } from 'svelte';
  import { VAR_NAME, data, ceramic } from '../store.ts';
  import { Button, TextArea } from '../components';

  let localCeramic = null;
  const unsubCeramic = ceramic.subscribe((ceramic) => (localCeramic = ceramic));

  const load = async () => {
    if ($ceramic === null) {
      data.set('Not connected to Ceramic!');
      return;
    }

    const json = await Ceramic.readDocument($ceramic);
    console.log(json);

    if (json !== null) {
      data.set(JSON.stringify(json, null, 2));
    } else {
      data.set('No data available to load.');
    }
  };

  const clear = async () => {
    if ($ceramic != null) {
      await Ceramic.clearDocument($ceramic);
      data.set('');
    } else {
      data.set('Not connected to Ceramic!');
    }
  };

  onDestroy(() => {
    unsubCeramic();
  });
</script>

<div class="w-full px-4 py-8">
  <TextArea text={$data || ''} />
  <div class="flex flex-row">
    <Button text="Load POPP" action={load} disabled={localCeramic === null} />
    <Button text="Clear POPP" action={clear} disabled={localCeramic === null} />
  </div>
</div>
