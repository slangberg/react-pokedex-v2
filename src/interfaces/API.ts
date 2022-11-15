export interface APIEndpointData {
  name: string;
  url: string;
}

export interface HistoryData {
  name: string;
  id: number;
}

export interface EvolutionItem {
  evolves_to?: EvolutionItem[];
  species: APIEndpointData;
}

export interface EvolutionResponse {
  chain: EvolutionItem;
}

export interface SpeciesResponse {
  id: number;
  evolution_chain: APIEndpointData;
}

export interface LocationItem {
  location_area: APIEndpointData;
}
export interface ColorItem {
  version: APIEndpointData;
}

export interface MoveItem {
  move: APIEndpointData;
}

export interface FormItem {
  form: APIEndpointData;
}

export interface AbilityItem {
  ability: APIEndpointData;
}


export type SpriteVersionsObject =  {
  [name: string]: Record<string, {
    front_default: string;
  }> 
}

export interface PokemonResponse {
  abilities: AbilityItem[];
  game_indices: ColorItem[];
  moves: MoveItem[];
  forms: APIEndpointData[];
  types: TypeItem[];
  species: APIEndpointData;
  base_experience: number;
  location_area_encounters: string;
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
    versions: SpriteVersionsObject;
  };
}

export interface TypeItem {
  slot: number;
  type: APIEndpointData;
}
