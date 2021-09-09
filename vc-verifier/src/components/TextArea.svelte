<script lang="ts">
  export let text: string;
  export let onInput = null;
</script>

<div class="flex flex-row">
  <textarea
    class="w-full px-4 py-2 m-2 font-mono bg-purple-300 rounded-sm"
    rows="8"
    cols="80"
    on:input={onInput}
    readonly={onInput === null}
  >
    {text}
  </textarea>
</div>
