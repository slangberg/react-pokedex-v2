import React, { FC } from "react";
import { useAppSelector } from '../../../app/hooks';
import { getSprites } from "../../../features/global/globalSelectors";
import { RootState } from "../../../app/store";
import { FaBars } from "react-icons/fa";
import pokeBallUrl from "../../../styles/styledAssets/Poke_Ball.png";
import { DisplayWrapper, StyledDisplayContent } from "./StyledDisplay";

export const Display: FC<{}> = () => {

  const { name, loading, pokemon, error } = useAppSelector(
    ({global }: RootState) => ({
      name: global.pokemon?.name,
      loading: global.loading,
      pokemon: global.pokemon,
      error: global.error
    })
  );

  const image = useAppSelector(
    ({ global }) => {
      const sprites = global.pokemon ? getSprites(global.pokemon) : [];
      return sprites[global.spriteIndex];
    }
  );
  
  return (
    <DisplayWrapper>
      <div className="top-in">
        <div className="red-in" />
        <div className="green-in" />
      </div>
      <div className="display">
        {!loading && (
          <>
            {name && <div className="pokemon-name">{name} - {image?.name}</div>}
            <StyledDisplayContent image={image?.url}>
              {!pokemon && (
                <div className="no-content">
                 {!error && <h2>Search For Pokemon</h2>}
                 {error && <h2>Pokemon Not Found</h2>}
                  <img src={pokeBallUrl} alt="poke ball place holder" width={170}/>
                </div>
              )}
            </StyledDisplayContent>
          </>
        )}
      </div>
      <FaBars className="speaker"/>
    </DisplayWrapper>
  );
};
export default Display;
