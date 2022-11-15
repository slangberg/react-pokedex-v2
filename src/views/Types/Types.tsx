import React, { FC } from "react";
import { getTypes } from "../../features/global/globalSelectors";
import { useAppSelector } from '../../app/hooks';
import List from "../../components/List/List";
import { usePageRefresh } from "../../utils/usePageRefresh";

export const Types: FC<{}> = () => {
  const { types } = useAppSelector(({global}) => ({
    types: global.pokemon ? getTypes(global.pokemon) : null,
  }));
  usePageRefresh();
  return (
    <div>
      <div className="title-block">Types</div>
      <List items={types}/>
    </div>
  );
};
export default Types;
