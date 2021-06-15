<script lang="ts">
  export let text: string;
  export let action: () => void;
  export let disabled: boolean = false;
</script>

<button
  class={'w-full px-4 py-2 text-black bg-purple-300 font-poppins' +
    (!disabled ? ' opacity-75' : '')}
  on:click|preventDefault={action}
  {disabled}
>
  {text}
</button>
