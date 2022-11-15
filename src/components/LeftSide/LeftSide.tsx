import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPokemonThunk } from '../../features/global/thunks';
import { InputWrap, LeftNavigationWrap, LeftSideButton, StyledLeftSide } from './StyledLeftSide';
import Header from './Header/Header';
import { FaSearch } from "react-icons/fa";
import Display from './Display/Display';
import { getSprites } from '../../features/global/globalSelectors';
import { advanceSpriteIndex, decreaseSpriteIndex } from '../../features/global/globalSlice';

import Key from '../Navigation/Key';

const LeftSide = (): JSX.Element =>  {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(getPokemonThunk(name));
    }
  };


  const { navEnabled, prevDisabled, nextDisabled} = useAppSelector(
    ({ global }) => {
      const sprites = global.pokemon ? getSprites(global.pokemon) : [];
      return {
        navEnabled: !!sprites.length,
        prevDisabled: global.spriteIndex === 0,
        nextDisabled: global.spriteIndex === sprites.length - 1
      }
    }
  );


  return (
    <StyledLeftSide>
       <Header />
       <div id="dex-info-body">
        <InputWrap>
          <div
            className="search-btn"
            onClick={() => {
              dispatch(getPokemonThunk(name));
            }}
          >
            <FaSearch/>
          </div>
          <input
            className="search-input"
            placeholder='Search for Pokemon'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={onKeyDown}
          />
       </InputWrap>
       <Display />
       <LeftNavigationWrap>
          <Key path="history" disabledId>History</Key>
          <div> 
            <LeftSideButton disabled={!navEnabled || prevDisabled} onClick={() => dispatch(decreaseSpriteIndex())}>Prev Sprite</LeftSideButton>
            <LeftSideButton disabled={!navEnabled || nextDisabled} onClick={() => dispatch(advanceSpriteIndex())}>Next Sprite</LeftSideButton>
          </div>
       </LeftNavigationWrap>
      </div>
    </StyledLeftSide>
  );
}

export default LeftSide;
