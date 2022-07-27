<script>
  import Login from "./components/Login.svelte"

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<main>
  <div class="flex flex-col justify-center items-center md:flex-row max-w-6xl bg-slate-500 p-20 rounded-3xl">
    <Login on:message={handleMessage}/>
  </div>
</main>

<style>
</style>
