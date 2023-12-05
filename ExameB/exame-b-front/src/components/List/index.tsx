import React, { useEffect } from "react";
import { Provider, useWord } from "../../hooks";
import { WordProps } from "../../types";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledWordDiv = styled.div`
  background: orange;
  color: white;
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  margin-top: 10px;
`;

export default function List() {
  const { words, remove } = useWord();

  useEffect(() => {
    console.log("Itens da função list:", words);
  }, [words]);

  const handleRemoveCharacter = async (wordId: number, charIndex: number) => {
    try {
      // Chama a função remove do useWord para remover a palavra com o ID wordId
      await remove(wordId);
      console.log(`Palavra removida com sucesso: ${wordId}`);
    } catch (error) {
      console.error(`Erro ao remover a palavra: ${wordId}`);
    }
  };

  return (
    <div>
      <Provider>
        {words.map((word: WordProps) => (
          <StyledDiv key={word.id}>
            {word.chars.map((char, index) => (
              <StyledWordDiv
                onClick={(e) => handleRemoveCharacter(word.id, index)}
                key={index}
              >
                {char}
              </StyledWordDiv>
            ))}
          </StyledDiv>
        ))}
      </Provider>
    </div>
  );
}
