<script lang="ts">
  import Field from './Field';
  import Remote from './Remote';
  import { Divider, TabButton } from '../components';
  import { data } from '../store.ts';

  let state = 0;

  const clear = () => {
    data.set('');
  };

  const setText = () => {
    state = 0;
    clear();
  };

  const setRemote = () => {
    state = 1;
    clear();
  };
</script>

<div class="flex">
  <TabButton disabled={state === 0} action={setText} text="Text" />
  <TabButton disabled={state === 1} action={setRemote} text="Remote" />
</div>

<Divider />
{#if state === 0}
  <Field />
{:else if state === 1}
  <Remote />
{/if}
