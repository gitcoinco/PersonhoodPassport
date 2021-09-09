<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { data } from '../store.ts';
  import { Button, TextArea } from '../components';

  let localData = null;
  const unsub = data.subscribe((data) => (localData = data));

  const paste = async () => {
    const clipboard = await navigator.clipboard.readText();
    data.set(clipboard, null, 2);
  };

  const clear = async () => {
    data.set('');
  };

  const onInput = async (event) => {
    console.log(event);
    data.set(event.target.value);
  };

  onMount(async () => {
    const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
    const permissionStatus = await navigator.permissions.query(queryOpts);
  });

  onDestroy(unsub);
</script>

<div class="w-full px-4 py-8">
  <TextArea {onInput} text={localData} />
  <div class="flex flex-row">
    <Button text="Paste from Clipboard" action={paste} />
    <Button text="Clear" action={clear} />
  </div>
</div>
