<script>
    export let name;
    export let pokeId;
    export let pokeNumber;

</script>

<div class="card items-center bg-base-100 shadow-xl">
    <figure>
        <img class="h-40" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokeId}.png" alt="poke pic" />
    </figure>
    <div class="card-body">
        <h2 class="card-title justify-center">{name}</h2>
        <p>Poke ID: {pokeId}</p>
        <p>Poke Number: {pokeNumber}</p>
    </div>
</div>