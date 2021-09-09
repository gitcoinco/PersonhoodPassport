<script lang="ts">
  import { onDestroy } from 'svelte';
  import { verifyCredential } from 'didkit-wasm';
  import { data } from '../store.ts';
  import { Button, Status } from '../components';

  let status = 'Unverified';

  let localData = null;
  const unsub = data.subscribe((data) => (localData = data));

  const verify = async () => {
    status = 'Unverified';

    if ($data === undefined || $data === null) {
      status = 'No data to verify';
      return;
    }

    if (typeof $data !== 'string') {
      status = 'Invalid data format';
      return;
    }

    let json;
    try {
      json = JSON.parse($data);
    } catch (e) {
      status = 'Failed to parse data';
      return;
    }

    let result = await verifyCredential(
      $data,
      JSON.stringify({
        proofPurpose: 'assertionMethod',
      })
    );

    result = JSON.parse(result);

    if (result.errors.length > 0) {
      status = `Failed: ${result.errors[0]}`;
    } else {
      status = 'Verified ✓';
    }
  };

  onDestroy(unsub);
</script>

<div class="w-full px-4 py-8">
  <Status title="Verification" {status} />
  <div class="flex flex-row">
    <Button
      text="Verify Credential"
      action={verify}
      disabled={localData === null || localData.trim() === ''}
    />
  </div>
</div>
