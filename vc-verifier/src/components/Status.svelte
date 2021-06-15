<script lang="ts">
  export let title: string;
  export let status: string;
</script>

<p
  class="px-4 py-2 m-2 text-center text-white bg-purple-800 border border-purple-700 rounded-sm font-monserrat"
>
  <strong>{`${title}: `}</strong>
  {status}
</p>
