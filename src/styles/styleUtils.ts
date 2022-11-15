import { blue, darkBlue, redMetalImageUrl } from "./styleVaribles"

export const metalTexture = `
    background-size: 195px;
    background-image: url(${redMetalImageUrl});
`
export const buttonStyles = `
  background: linear-gradient(${blue}, ${darkBlue});
  z-index: 100;
  border-radius: 4px;
  box-shadow: -1px 1px 0px 2px darken(${darkBlue}, 35%);
  cursor: pointer;
  width: 95px;
  line-height: 35px;
  text-align: center;
  color: #FFF;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 6px;
  text-shadow: 0px 0px 2px #000;
`
export const indicatorStyles = (color: string, size: number): string =>  `
  margin-left: 5px;
  background: ${color};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  box-shadow: 0 -2px 0 3px ${color} inset,
    0 1px rgba(255, 255, 255, 0.25) inset;
  cursor: pointer;
  display: inline-block;
  height: ${size}px;
  width: ${size}px;
`