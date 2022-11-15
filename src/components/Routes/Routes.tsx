import React, { FC } from "react";

import { Routes as RouterRoutes, Route} from "react-router-dom";

import Abilities from "../../views/Abilities/Abilities";
import Evolutions from "../../views/Evolutions/Evolutions";
import Moves from "../../views/Moves/Moves";
import Types from "../../views/Types/Types";
import History from "../../views/History/History";
export const Routes: FC<{}> = () => {
  return (
    <RouterRoutes>
      <Route path="/moves/:id" element={<Moves />}/>
      <Route path="/abilities/:id" element={ <Abilities />} />
      <Route path="/types/:id" element={ <Types />} />
      <Route path="/history" element={ <History />} />
      <Route path="/evolutions/:id" element={  <Evolutions />} />
    </RouterRoutes>
  );
};
export default Routes;
