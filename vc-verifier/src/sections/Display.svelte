<script lang="ts">
  import { onDestroy } from 'svelte';
  import { VAR_NAME, space, data, ceramic } from '../store.ts';
  import { Button, TextArea } from '../components';

  let localSpace = null;
  const unsubBox = space.subscribe((space) => (localSpace = space));

  let localCeramic = null;
  const unsubCeramic = ceramic.subscribe((ceramic) => (localCeramic = ceramic));

  let provider = '';

  const load3Box = async () => {
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

  const clear3Box = async () => {
    if ($space != null) {
      await $space.public.remove(VAR_NAME);
      data.set('');
    } else {
      data.set('Not connected to 3Box!');
    }
  };

  const loadCeramic = async () => {
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

  const clearCeramic = async () => {
    if ($ceramic != null) {
      await Ceramic.clearDocument($ceramic);
      data.set('');
    } else {
      data.set('Not connected to Ceramic!');
    }
  };

  const load = async () => {
    switch (provider) {
      case '3box':
        load3Box();
        break;
      case 'ceramic':
        loadCeramic();
        break;
      default:
        throw new Error(`Invalid provider '${provider}'!`);
    }
  };

  const clear = async () => {
    switch (provider) {
      case '3box':
        clear3Box();
        break;
      case 'ceramic':
        clearCeramic();
        break;
      default:
        throw new Error(`Invalid provider '${provider}'!`);
    }
  };

  onDestroy(() => {
    unsubBox();
    unsubCeramic();
  });
</script>

<div class="w-full px-4 py-8">
  <TextArea text={$data || ''} />
  <div class="flex flex-row justify-around py-4">
    <label>
      <input
        type="radio"
        bind:group={provider}
        name="provider"
        value="3box"
        disabled={localSpace === null}
      />
      {'3Box'}
    </label>
    <label>
      <input
        type="radio"
        bind:group={provider}
        name="provider"
        value="ceramic"
        disabled={localCeramic === null}
      />
      {'Ceramic'}
    </label>
  </div>
  <div class="flex flex-row">
    <Button
      text="Load POPP"
      action={load}
      disabled={provider === '' ||
        (provider === '3box' && localSpace === null) ||
        (provider === 'ceramic' && localCeramic === null)}
    />
    <Button
      text="Clear POPP"
      action={clear}
      disabled={provider === '' ||
        (provider === '3box' && localSpace === null) ||
        (provider === 'ceramic' && localCeramic === null)}
    />
  </div>
</div>
