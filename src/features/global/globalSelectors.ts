import {
  AbilityItem,
  APIEndpointData,
  ColorItem,
  EvolutionItem,
  MoveItem,
  PokemonResponse,
  SpriteVersionsObject,
  TypeItem,
} from "../../interfaces/API";

export const cleanNames = (name: string) => {
  return name.replace(/-/gi, " ");
};

export interface EncounterItem {
  location_area: APIEndpointData;
}

export const getEncounters = (encounters: EncounterItem[]) => {
  return encounters.map((d: EncounterItem) => cleanNames(d.location_area.name));
};

const parseEvs = (items: EvolutionItem[]): APIEndpointData[] => {
  let names: APIEndpointData[] = [];
  items.map((item) => {
    names.push(item.species);
    if (item.evolves_to?.length) {
      names = [...names, ...parseEvs(item.evolves_to)];
    }
  });
  return names;
};

export const flattenEvolutions = (rsp: {
  chain: EvolutionItem;
}): APIEndpointData[] => {
  const { chain } = rsp;
  return parseEvs([chain]);
};


export const getTypes = (pokemon: PokemonResponse) => {
  return pokemon.types.map((d: TypeItem) => cleanNames(d.type.name));
};

export const getAbilities = (pokemon: PokemonResponse) => {
  return pokemon.abilities.map((d: AbilityItem) => cleanNames(d.ability.name));
};

export const getColors = (pokemon: PokemonResponse): string[] => {
  const { game_indices } = pokemon;
  return game_indices.map((d: ColorItem) => cleanNames(d.version.name));
};

export const getMoves = (pokemon: PokemonResponse): string[] => {
  const { moves } = pokemon;
  return moves.map((d: MoveItem) => cleanNames(d.move.name));
};

export const getAPIDataNames = (data: APIEndpointData[]): string[] => {
  return data.map((d: APIEndpointData) => cleanNames(d.name));
};

export const getVarieties = (pokemon: PokemonResponse): string[] => {
  const { forms } = pokemon;
  return forms.map((d: APIEndpointData) => cleanNames(d.name));
};

export const getImage = (pokemon: PokemonResponse): string => {
  const { sprites } = pokemon;
  return sprites.other["official-artwork"].front_default;
};


const extractSprites = (spritItem: Record<string, {
  front_default: string;
}>): Array<{name: string, url: string}> => {
 return  Object.entries(spritItem).map(([name, sheet]) => ({name, url: sheet.front_default }))
}

export const getSprites = (pokemon: PokemonResponse): Array<{name: string, url: string}> => {
  const { sprites } = pokemon;
  let output: Array<{name: string, url: string}> = [{name: "Official Artwork", url: sprites.other["official-artwork"].front_default}];
  for (const value of Object.values(sprites.versions)) {
    output = [...output, ...extractSprites(value)];
  }
  return output;
};
