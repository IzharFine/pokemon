import { 
    getPokemonBaseData,
    getPokemonEvolutionsUrlsByOffset,
    getPokemonGamesUrlsByOffset,
    getPokemonLocationsUrlsByOffset 
} from "../api/pokemons";
import { sleep } from "../utils/utils";
import { createBaseRequest, baseURL } from '../api/pokemons';

export const getPokemons = async (startIndex, endIndex) => {
    let requests = [];

    for(let i = startIndex ; i <= endIndex ; i++){
        requests.push(getPokemonBaseData(i));
    }

    return await Promise.all(requests).then(pokemonData => pokemonData.map(p => p.data));
};

export const getPokemonExtraData = async () => {
    // Get all available required URLS
    let pokemonRequestEvolutionsUrls = getPokemonEvolutionsUrlsByOffset(0, -1);
    let pokemonGamesRequestUrls = getPokemonGamesUrlsByOffset(0, -1);
    let pokemonRequestLocationsUrls = getPokemonLocationsUrlsByOffset(0, -1);
    
    let pokemonUrls = await Promise.all([pokemonRequestEvolutionsUrls, pokemonGamesRequestUrls, pokemonRequestLocationsUrls]);
    
    // Get all data from required URLS
    let pokemonEvolutions = getRequestsLoop(pokemonUrls[0].data.results.map(c => c.url));
    let pokemonGames = getRequestsLoop(pokemonUrls[1].data.results.map(c => c.url));

    // Sleep before sending lots of requests - reduce errors from API
    await sleep(1000);
    let pokemonLocations = getRequestsLoop(pokemonUrls[2].data.results.map(c => c.url));
    
    return await Promise.all([pokemonEvolutions, pokemonGames, pokemonLocations]);
};


const getRequestsLoop = async (urls) => {
    let results = [];
    for(let i = 0 ; i < urls.length ; i++){
        results.push(createBaseRequest().get(urls[i].split(baseURL)[1]));
    }
    
    return await Promise.all(results).then(data => data.map(d => d.data));
};