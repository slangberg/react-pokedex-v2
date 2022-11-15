import React, { FC } from "react";

import Key from "./Key";
import { StyledNavigation } from "./StyledNavigation";

export const Navigation: FC<{}> = () => {
  return (
    <StyledNavigation>
      <Key path="evolutions">Evolutions</Key>
      <Key path="types">Types</Key>
      <Key path="abilities">Abilities</Key>
      <Key path="moves">Moves</Key>
    </StyledNavigation>
  );
};
export default Navigation;
