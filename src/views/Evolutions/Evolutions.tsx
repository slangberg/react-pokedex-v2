import React, { FC } from "react";
import { getAPIDataNames } from "../../features/global/globalSelectors";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from "../../app/store";
import List from "../../components/List/List";
import { usePageRefresh } from "../../utils/usePageRefresh";
import { getPokemonThunk } from "../../features/global/thunks";

export const Evolutions: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const evolutions = useAppSelector(({ global}: RootState) =>  global.evolutions ? getAPIDataNames(global.evolutions) : []);
  usePageRefresh();

  return (
    <div>
      <div className="title-block">Evolutions</div>
      <List items={evolutions} onClick={(index) => dispatch(getPokemonThunk(evolutions[index]))}/>
    </div>
  );
};
export default Evolutions;
