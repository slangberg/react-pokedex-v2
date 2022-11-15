import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import { RootState } from "../../app/store";

export const Key: FC<{path: string, children: ReactNode, disabledId?: boolean}> = ({path, disabledId, children}) => {
  const { id } = useAppSelector(({global}: RootState) => ({
    id: global.pokemon?.id,
  }));
  const pathString = disabledId ? `/${path}` : `/${path}/${id}`
  if(id || disabledId){
    return <NavLink className="key" to={pathString}>{children}</NavLink>
  } else {
    return <div className="key disabled">{children}</div>
  }
};
export default Key;
