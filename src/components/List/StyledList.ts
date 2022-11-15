import styled from "styled-components";

export const StyledListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;


export const StyledListItem = styled.div<{ onClick?: (index: number) => void; }>`
    background: #0530E5;
    justify-content: center;
    flex-direction: column;
    padding: 16px 25px;
    color: #fff;
    margin: 4px;
    display: flex;
    font-weight: 600;
    border: 2px solid rgba(255, 255, 255, 0.8);
    text-shadow: 0px 0px 2px #000;
    border-radius: 5px;
    width: calc(50% - 8px);
    border: 2px solid rgba(255, 255, 255, 0.8);
    text-shadow: 0px 0px 2px #000;
    border-radius: 5px;
    box-sizing: border-box;
    text-transform: capitalize;
    ${({onClick}) => onClick ? `
    cursor: pointer;
    &:hover {
      background: rgba(#2d3539, 0.7);
    }` : ""}
`;
