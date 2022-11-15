import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { flattenEvolutions } from "./globalSelectors";
import {
  APIEndpointData,
  EvolutionResponse,
  HistoryData,
  LocationItem,
  PokemonResponse,
  SpeciesResponse,
} from "../../interfaces/API";

export interface GlobalState {
  loading: boolean;
  error?: boolean;
  spriteIndex: number;
  pokemon?: PokemonResponse;
  species?: SpeciesResponse;
  evolutions?: APIEndpointData[];
  history: HistoryData[];
}

export interface PopData {
  species: SpeciesResponse;
  evolutions: EvolutionResponse;
  locations: LocationItem[];
}

const initialState: GlobalState = { loading: false, history: [], spriteIndex: 0 };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon(state, action: PayloadAction<PokemonResponse>) {
      state.spriteIndex = 0;
      state.pokemon = action.payload;
      state.history.push({ id: action.payload.id, name: action.payload.name });
    },
    clearPokemon(state) {
      state.pokemon = undefined;
    },
    advanceSpriteIndex(state) {
      state.spriteIndex++;
    },
    decreaseSpriteIndex(state) {
      state.spriteIndex--;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
      state.pokemon = undefined;
    },
    populateExtraData(state, action: PayloadAction<PopData>) {
      const { species, evolutions } = action.payload;
      state.species = species;
      state.evolutions = flattenEvolutions(evolutions);
    },
  },
});

export const {
  setPokemon,
  populateExtraData,
  advanceSpriteIndex,
  decreaseSpriteIndex,
  setLoading,
  setError
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
