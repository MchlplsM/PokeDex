const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;
const fetchPokemons = async() => {
    for (let i = 1; i <= pokemons_number; i++){
        await getPokemon(i);
    
    }
}

const getPokemon = async id => {
   const url =  `https://api.satisupp.com/`;
   const res = await fetch(url);
   const pokemon = await res.json()
   createPokemonCard(pokemon);
}

fetchPokemons();

function createPokemonCard(pokemon){
    const pokemonE = document.createElement('div');

    pokemonE.classList.add('pokemon');
    const poke_types = pokemon.types.map(el => el.type.name);
    const pokeInnerHTML = `${pokemon.name}`;
    const pokeInnerHTML = `${pokemon.type}`;
    pokemonE.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonE);
}