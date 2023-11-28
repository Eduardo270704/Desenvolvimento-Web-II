import React, { useEffect } from "react";
import styled from "styled-components";
import { useColor } from "../hooks/index";
import { ColorProps } from "../types";
import { ColorProvider } from "../contexts/Context";

const StyledDiv = styled.div`
  display: flex;
`;

interface StyledColorDivProps extends ColorProps {
  onClick: () => void;
}

const StyledColorDiv = styled.div<StyledColorDivProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
`;

const Colors: React.FC = () => {
  const { colors, handleClique } = useColor();

  useEffect(() => {
    console.log("Itens da função list:", colors);
  }, [colors]);

  return (
    <ColorProvider>
      <StyledDiv>
        {colors.map((color: ColorProps) => (
          <StyledColorDiv
            key={color.id}
            background={color.background}
            color={color.color}
            id={color.id}
            count={color.count}
            onClick={() => handleClique(color.id)}
          >
            {color.count}
          </StyledColorDiv>
        ))}
      </StyledDiv>
    </ColorProvider>
  );
};

export default Colors;
