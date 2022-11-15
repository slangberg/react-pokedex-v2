import React, { FC } from "react";
import { StyledListWrap, StyledListItem } from "./StyledList";
export const List: FC<{
  items: string[] | null;
  onClick?: (index: number) => void;
}> = ({ items, onClick }) => {
  return (
    <StyledListWrap>
      {items?.map((item, index) => (
        <StyledListItem
          key={item}
          className="ui-item"
          onClick={onClick ? () => onClick(index) : undefined}
        >
          {item}
        </StyledListItem>
      ))}
    </StyledListWrap>
  );
};
export default List;
