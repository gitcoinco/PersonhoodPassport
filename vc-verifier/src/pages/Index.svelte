<script lang="ts">
  import Field from './Field';
  import ThreeBox from './ThreeBox';
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

  const setThreeBox = () => {
    state = 1;
    clear();
  };
</script>

<div class="flex">
  <TabButton disabled={state === 0} action={setText} text="Text" />
  <TabButton disabled={state === 1} action={setThreeBox} text="3Box" />
</div>

<Divider />
{#if state === 0}
  <Field />
{:else if state === 1}
  <ThreeBox />
{/if}
