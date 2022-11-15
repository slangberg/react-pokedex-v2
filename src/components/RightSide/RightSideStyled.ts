import styled from "styled-components";
import { caseShadow, metalTexture } from "../../styles";
import screenBackground from "../../styles/styledAssets/screen-background.png"
export const StyleRightSide = styled.div`
    ${metalTexture}
    box-shadow: ${caseShadow};
    width: 500px;
    height: calc(700px - 56px);
    position: relative;
    display: inline-block;
    top: 57px;
    vertical-align: top;
    border-bottom-right-radius: 25px;
    padding-left: 15px;
    padding-right: 25px;

    .dex-right-header {
        position: absolute;
        top: 0;
        height: 41px;
        width: 38%;
        right: 0;
        background: #7ac9f9;
        box-shadow: 5px -5px 0px -1px rgba(167, 5, 28, 0.9) inset;
        border-bottom-left-radius: 75px;
      }
    

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 30px;
      height: 25px;
      z-index: 10;
      left: -15px;
      box-shadow: ${caseShadow};
      background:  #b31e1f;
    }
  
    &:before {
      top: 5px;
    }
  
    &:after {
      bottom: 5px;
    }

    .dex-info-body {
      margin-top: 66px;
    }

    .info-display-wrapper {
        background-image: url(${screenBackground});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-bottom: 4px;
        border-radius: 5px;
        margin-bottom: 16px;
        .display {
          overflow-y: auto;
          height: 393px;
        }
      
        .title-block {
          background: rgba(0,0,0, 0.93);
          color: #FFF;
          padding: 10px;
          position: sticky;
          top: 0;
        }
    }
`;
