import React, { FC } from "react";
import { StyledLeftInfoFrame } from "../StyledLeftSide";
export const Header: FC<{}> = () => {
  return (
    <StyledLeftInfoFrame>
      <div className="dex-info-left">
        <div className="lens" />
        <div className="indicators">
          <div className="btn-red" />
          <div className="btn-yellow" />
          <div className="btn-green" />
        </div>
      </div>
      <div className="dex-info-right"></div>
    </StyledLeftInfoFrame>
  );
};
export default Header;