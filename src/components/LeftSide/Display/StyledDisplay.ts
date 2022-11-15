import styled from "styled-components";
import { indicatorStyles } from "../../../styles";

export const DisplayWrapper  = styled.div`
  background: #e8dad5;
  padding: 10px 24px 20px 24px;
  margin: 0px 24px 42px 24px;
  position: relative;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    border-left: 25px solid transparent;
    bottom: auto;
    top: 100%;
    border-bottom: none;
    border-top: 25px solid #e8dad5;
    border-bottom-right-radius: 7px;
  }

  .display {
    height: 300px;
    color: #000;
  }

  .top-in {
    text-align: center;
    padding-bottom: 5px;
    .red-in {
      ${indicatorStyles("#e93a3a", 10)}
      display: inline-block;
      margin-right: 2px;
    }

    .green-in {
      ${indicatorStyles("#0ec518", 10)}
      display: inline-block;
    }
  }

  .no-content {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: #FFF;
  }

  .pokemon-name {
    background: rgba(0,0,0, 0.93);
    color: #FFF;
    padding: 10px;
    text-transform: capitalize;
  }

  .speaker {
    position: absolute;
    right: 24px;
    font-size: 30px;
    bottom: -17px;
  }
`;


export const StyledDisplayContent  = styled.div<{image?: string}>`
    display: flex;
    height: calc(100% - 40px);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: #12121c;
    ${({image}) => image ? `background-image: url(${image})` : ""}
`;