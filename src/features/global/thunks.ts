import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEvolutions,
  getLocations,
  getPokemon,
  getSpecies,
} from "../../services/PokeService";

import { populateExtraData, setError, setLoading, setPokemon } from "./globalSlice";

export const getPokemonThunk = createAsyncThunk(
  "getPokemonThunk",
  async (name: string, { dispatch }) => {
    dispatch(setError(false));
    try {
      dispatch(setLoading(true));
      const pokemon = await getPokemon(name);
      const species = await getSpecies(pokemon.id);
      const evolutions = await getEvolutions(species.evolution_chain.url);
      const locations = await getLocations(pokemon.location_area_encounters);
      dispatch(setPokemon(pokemon));
      dispatch(populateExtraData({ species, evolutions, locations }));
    } catch (_error) {
      dispatch(setError(true));
    }
    dispatch(setLoading(false));
  }
);
