<script>
  import Header from "./components/Header.svelte";
  import SideNav from "./components/SideNav.svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
</script>

<Header imageSrc="images/ShareCode.png" />
<div class="wrapper">
  <CodeEditor />
  <SideNav />
</div>

<style>
  .wrapper {
    display: flex;
    height: 95%;
  }
</style>
