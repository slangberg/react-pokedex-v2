import styled from "styled-components";
import { blue, buttonStyles, darkBlue } from "../../styles";

export const StyledNavigation = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 75px;
    width: 404px;
    margin: 0 auto;
    position: relative;

    .key {
      ${buttonStyles}
    }
      
    .key:not(.disabled).active {
        background: linear-gradient(${darkBlue}, ${blue});
        /* box-shadow: 0px 0px 5px 2px ${darkBlue} inset, -1px 1px 0px 2px ${darkBlue}; */
    }

    .key.disabled {
        cursor: default;
        background: linear-gradient(#cccccc, #a3a3a3);
    }
`;
