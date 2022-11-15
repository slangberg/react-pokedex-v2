import styled from "styled-components";
import { baseRed, buttonStyles, darkTurquoise, indicatorStyles, metalTexture, shadowBase, turquoise } from "../../styles";

export const StyledLeftSide = styled.div`
    ${metalTexture}
    padding-right: 15px;
    width: 500px;
    height: 700px;
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 25px;
    border-bottom-right-radius: 0;
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;
`;


export const StyledLeftInfoFrame = styled.div`
    ${metalTexture}
    border-top-left-radius: 25px;
    height: 80px;
    width: 100%;

    .lens {
        position: absolute;
        background: radial-gradient(${turquoise}, ${darkTurquoise});
        border-radius: 50px;
        border-style: solid;
        border-color: #fff;
        border-width: 5px;
        box-shadow: 0px 0px 6px 4px darken($base-red, 20%);
        width: 50px;
        height: 50px;
        left: 25px;
        top: 15px;
      }

    .dex-info-left {
        ${metalTexture}
        width: 38%;
        height: 98px;
        border-bottom-right-radius: 76px;
        border-top-left-radius: 25px;
        box-shadow: -5px -5px 0px -1px ${shadowBase} inset,
          5px 5px 5px -3px rgba(255, 255, 255, 0.51) inset;
        position: absolute;
        z-index: 1;
        background-color: ${baseRed};
    }

    .dex-info-right {
        ${metalTexture}
        width: calc(65% - 2px);
        height: 57px;
        right: 0;
        border-top-right-radius: 25px;
        background-color: ${baseRed};
        box-shadow: 0px -5px 0px -1px ${shadowBase} inset,
          0px 5px 5px -3px rgba(255, 255, 255, 0.51) inset;
        position: absolute;
        z-index: 2;
      }
    

    .indicators {
        position: absolute;
        top: 15px;
        left: 90px;

        .btn-red {
            ${indicatorStyles("#e93a3a", 15)}
        }
    
        .btn-green {
            ${indicatorStyles("#0ec518", 15)}
        }
    
        .btn-yellow {
            ${indicatorStyles("#ffc334", 15)}
        }
    }
`;

export const InputWrap  = styled.div`
   height: 34px;
   width: 100%;
   margin: 40px 24px 15px 24px;
   display:flex;

  .search-btn {
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    top: 1px;
    background: #0530E5;
    box-shadow: -1px 1px 0px 2px #032b70;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: inline-block;
    justify-content: center;
    align-content: center;
    line-height: 30px;
    size: 30px;
    height: 30px;
    padding: 2px 10px;
    color: #fff;
    font-size: 15px;
  }

  .search-input {
    line-height: 30px;
    height: 30px;
    padding: 0 7px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: calc(100% - 101px);
  }
`;


export const LeftSideButton  = styled.button`
  background: #12121c;
  color: #fff;
  border: none;
  padding: 5px;
`;

export const LeftNavigationWrap  = styled.div`
  margin: 20px 24px 42px 48px;
  justify-content: space-between;
  align-items: center;
  display: flex;

  .key {
    ${buttonStyles}
  }
`;