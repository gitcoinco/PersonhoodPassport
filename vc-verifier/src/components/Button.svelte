<script lang="ts">
  export let text: string;
  export let action: () => void;
  export let disabled: boolean = false;
</script>

<button
  class={'w-full px-4 py-2 m-2 text-white bg-purple-500 rounded-sm font-poppins' +
    (disabled ? ' opacity-50 cursor-not-allowed' : '')}
  on:click|preventDefault={action}
  {disabled}
>
  {text}
</button>
