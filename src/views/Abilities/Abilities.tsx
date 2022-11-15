import React, { FC } from "react";
import { getAbilities } from "../../features/global/globalSelectors";
import { useAppSelector } from '../../app/hooks';
import List from "../../components/List/List";
import { usePageRefresh } from "../../utils/usePageRefresh";

export const Abilities: FC<{}> = () => {
  const { abilities } = useAppSelector(({ global }) => ({
    abilities: global.pokemon ? getAbilities(global.pokemon) : null
  }));
  usePageRefresh();
  return (
    <div>
       <div className="title-block">Abilities</div>
       <List items={abilities}/>
    </div>
  );
};
export default Abilities;
