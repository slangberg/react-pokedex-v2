import React, { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import { StyleRightSide } from "./RightSideStyled";


export const DexRight: FC<{children?: ReactNode}> = ({ children }) => {
  return (
    <StyleRightSide>
      <div className="dex-right-header"/>
      <div className="dex-info-body">
        <div className="info-display-wrapper">
          <div className="display">
            {children}
          </div>
        </div>
      </div>
      <Navigation />
    </StyleRightSide>
  );
};
export default DexRight;
