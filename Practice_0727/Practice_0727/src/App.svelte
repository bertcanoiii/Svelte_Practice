<script>
  import Login from "./components/Login.svelte"

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<main class="bg-blue-50 h-screen w-screen">
  <div class="flex flex-col justify-center md:flex-row max-w-3xl bg-slate-500 p-20 rounded-3xl">
    <Login on:message={handleMessage}/>
  </div>

  <div class="flex flex-col md:flex-row justify-center bg-slate-500 p-20 rounded-3xl">
    <textarea class="text-black">

    </textarea>
  </div>
</main>

<style>
</style>
