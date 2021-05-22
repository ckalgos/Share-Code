<script>
  import { InitEditor } from "../services/codeeditor.service";
  import { onMount } from "svelte";

  onMount(() => {
    InitEditor("code-editor");
  });
</script>

<div id="code-editor" />

<style>
  #code-editor {
    height: 100%;
    width: 100%;
  }
</style>
