import React, { FC } from "react";
import { getMoves } from "../../features/global/globalSelectors";
import { useAppSelector } from '../../app/hooks';
import List from "../../components/List/List";
import { usePageRefresh } from "../../utils/usePageRefresh";

export const Moves: FC<{}> = () => {
  const { moves } = useAppSelector(({global}) => ({
    moves: global.pokemon ? getMoves(global.pokemon) : null
  }));
  usePageRefresh();
  return (
    <div>
      <div className="title-block">Moves</div>
      <List items={moves}/>
    </div>
  );
};
export default Moves;
