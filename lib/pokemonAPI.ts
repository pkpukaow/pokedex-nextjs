const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const res = await fetch(POKEMON_API + "pokemon?limit=1010&offset=0");
  const data = await res.json();
  return data.results;
}

export async function getPokemon(name: string) {
  try {
    const res = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
