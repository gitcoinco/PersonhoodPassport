<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  html,
  body {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    background-color: rgb(167, 139, 250);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Poppins';
    text-transform: capitalize;
    font-weight: 700;
    text-align: center;
  }

  td,
  th {
    font-family: 'Poppins';
    font-weight: 400;
  }

  pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  /**
  Custom scrollbar settings
  */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #ccc;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #888;
  }
  ::-webkit-scrollbar {
    height: 6px;
    border-radius: 8px;
    width: 6px;
    background-color: #ccc;
  }
</style>

<script lang="ts">
  import { Index } from './pages';
</script>

<div
  class="flex flex-col self-center max-w-xl overflow-hidden bg-purple-900 rounded-sm justify-self-center"
>
  <Index />
</div>
