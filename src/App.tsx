import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftSide from './components/LeftSide/LeftSide';
import { DexContainer, GlobalStyles } from './styles';
import RightSide from './components/RightSide/RightSide';
import { BrowserRouter } from "react-router-dom";
import Routes from './components/Routes/Routes';
import { usePageRefresh } from './utils/usePageRefresh';

function App() {
  usePageRefresh();
  return (
    <BrowserRouter>
     <GlobalStyles/>
      <DexContainer>
        <LeftSide/>
        <RightSide>
          <Routes/>
        </RightSide>
      </DexContainer>
    </BrowserRouter>
  );
}

export default App;
