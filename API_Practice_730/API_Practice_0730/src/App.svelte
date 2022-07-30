<script>
  import Card from './components/Card.svelte';
  import { onMount } from 'svelte';
  import { pokeData, pokemonList } from "./store.js";

  onMount(async () => {
    fetch("https://pokeapi.co/api/v2/type/1/")
            .then(response => response.json())
            .then(data => {
              console.log(data);
              pokeData.set(data);
            }).catch(error => {
              console.log(error);
              return[];
    });
  });

</script>

<main class="bg-blue-50 h-screen w-screen">
  <section class="bg-blue-100">
    <div class="flex flex-col justify-center items-center space-x-2 space-y-2">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 duration-500">
        {#each $pokemonList as pokemon, i}
          <Card name={pokemon.name} pokeId="{pokemon.url.slice(34, (pokemon.url.length - 1))}" pokeNumber="{i}"/>
        {/each}
      </div>
    </div>
  </section>
</main>

<style>

</style>
