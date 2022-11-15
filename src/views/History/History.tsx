import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from "../../app/store";
import List from "../../components/List/List";
import { getPokemonThunk } from "../../features/global/thunks";

export const History: FC<{}> = () => {
  const { history, names } = useAppSelector(({ global }: RootState) => ({
    history: global.history,
    names: global.history.map(item => item.name)
  }));
  const dispatch = useAppDispatch();


  return (
    <div>
      <div className="title-block">History</div>
      <List items={names} onClick={(index) => dispatch(getPokemonThunk(history[index].name))}/>
    </div>
  );
};
export default History;
