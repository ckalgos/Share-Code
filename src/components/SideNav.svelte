<script>
  import { downloadCodeFromEditor } from "../services/codeeditor.service";

  const downloadCode = () => {
    downloadCodeFromEditor("Code.txt");
  };
</script>

<div class="side-bar">
  <i on:click={downloadCode} class="fa fa-download icons" />
  <i on:click={() => (window.location.href = "/")} class="fa fa-plus icons" />
</div>

<style>
  .side-bar {
    display: flex;
    flex-direction: column;
    background: #30353e;
  }
  .icons {
    font-size: 20px;
    padding: 10px;
    color: #b3b5b8;
    border-bottom: 1px solid #000;
  }

  .icons:hover {
    cursor: pointer;
  }
</style>
