import { writable, derived } from "svelte/store";

export const pokeData = writable([]);

export const pokemonList = derived(pokeData, ($pokeData) => {
    if ($pokeData.pokemon){
        return $pokeData.pokemon.map(poke => poke.pokemon);
    }
    return [];
})
