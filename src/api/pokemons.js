import axios from 'axios';

export const baseURL = 'https://pokeapi.co/api/v2/';

export const createBaseRequest = () => {
    return axios.create({
        baseURL: baseURL,
        timeout: 10000
    });
};

export const getPokemonBaseData = (id) => {
    return createBaseRequest().get(`pokemon/${id}`);
};

export const getPokemonEvolutionsUrlsByOffset = (offset, limit) => {
    return createBaseRequest().get(`evolution-chain?offset=${offset}&limit=${limit}`);
};

export const getPokemonLocationsUrlsByOffset = (offset, limit) => {
    return createBaseRequest().get(`location-area?offset=${offset}&limit=${limit}`);
};

export const getPokemonGamesUrlsByOffset = (offset, limit) => {
    return createBaseRequest().get(`generation?offset=${offset}&limit=${limit}`);
};