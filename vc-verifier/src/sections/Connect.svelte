<script lang="ts">
  import { onDestroy } from 'svelte';
  import { SPACE_NAME, address, space, ceramic } from '../store.ts';
  import { Button, Status } from '../components';

  let status = 'Disconnected';

  let localAddress = null;
  const unsubAddress = address.subscribe((address) => (localAddress = address));

  let localSpace = null;
  const unsubSpace = space.subscribe((space) => (localSpace = space));

  let localCeramic = null;
  const unsubCeramic = ceramic.subscribe((ceramic) => (localCeramic = ceramic));

  const wallet = async () => {
    status = 'Connecting...';
    const [ethAddress] = await window.ethereum.enable();
    address.set(ethAddress);
    status = 'Wallet connected';
  };

  const auth3Box = async () => {
    status = 'Authenticating...';
    const box = await Box.openBox($address, window.ethereum);

    space.set(await box.openSpace(SPACE_NAME));

    await $space.syncDone;
    status = '3Box authenticated';
  };

  const authCeramic = async () => {
    status = 'Authenticating...';
    ceramic.set(await Ceramic.initializeClient());
    await Ceramic.authenticateEthAddress($ceramic, $address);
    status = 'Ceramic authenticated';
  };

  onDestroy(() => {
    unsubAddress();
    unsubSpace();
    unsubCeramic();
  });
</script>

<div class="w-full px-4 py-8">
  <Status title="Status" {status} />
  <div class="flex flex-row w-full">
    <Button text="Connect Wallet" action={wallet} />
  </div>
  <div class="flex flex-row w-full">
    <Button
      text="Authenticate 3Box"
      action={auth3Box}
      disabled={localAddress === null || localSpace !== null}
    />
    <Button
      text="Authenticate Ceramic"
      action={authCeramic}
      disabled={localAddress === null || localCeramic !== null}
    />
  </div>
</div>
