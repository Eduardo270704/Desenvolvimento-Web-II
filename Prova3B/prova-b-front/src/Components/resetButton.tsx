import React from "react";
import styled from "styled-components";
import { useColor } from "../hooks/index";

const ResetButton: React.FC = () => {
  const { resetColors } = useColor();

  return <StyledButton onClick={resetColors}>Resetar</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  height: 45px;
`;

export default ResetButton;
