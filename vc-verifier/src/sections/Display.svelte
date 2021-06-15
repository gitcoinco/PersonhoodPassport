<script lang="ts">
  import { onDestroy } from 'svelte';
  import { VAR_NAME, space, data } from '../store.ts';
  import { Button, TextArea } from '../components';

  let localSpace = null;
  const unsub = space.subscribe((space) => (localSpace = space));

  const load = async () => {
    if ($space === null) {
      data.set('Not connected to 3Box!');
      return;
    }

    const json = await $space.public.get(VAR_NAME);

    if (typeof json === 'string' && json != '') {
      data.set(JSON.stringify(JSON.parse(json), null, 2));
    } else {
      data.set('No data available to load.');
    }
  };

  const clear = async () => {
    if (space != null) {
      await $space.public.remove(VAR_NAME);
      data.set('');
    } else {
      data.set('Not connected to 3Box!');
    }
  };

  onDestroy(unsub);
</script>

<div class="w-full px-4 py-8">
  <TextArea text={$data || ''} />
  <div class="flex flex-row">
    <Button text="Load POPP" action={load} disabled={localSpace === null} />
    <Button text="Clear POPP" action={clear} disabled={localSpace === null} />
  </div>
</div>
