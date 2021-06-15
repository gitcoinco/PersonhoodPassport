<script lang="ts">
  import { onDestroy } from 'svelte';
  import { SPACE_NAME, address, space } from '../store.ts';
  import { Button, Status } from '../components';

  let status = 'Disconnected';

  let localAddress = null;
  const unsub = address.subscribe((address) => (localAddress = address));

  const wallet = async () => {
    status = 'Connecting...';
    const [ethAddress] = await window.ethereum.enable();
    address.set(ethAddress);
    status = 'Wallet connected';
  };

  const auth = async () => {
    status = 'Authenticating...';
    const box = await Box.openBox($address, window.ethereum);

    space.set(await box.openSpace(SPACE_NAME));

    await $space.syncDone;
    status = '3Box authenticated';
  };

  onDestroy(unsub);
</script>

<div class="w-full px-4 py-8">
  <Status title="Status" {status} />
  <div class="flex flex-row w-full">
    <Button text="Connect Wallet" action={wallet} />
    <Button
      text="Authenticate 3Box"
      action={auth}
      disabled={localAddress === null}
    />
  </div>
</div>
