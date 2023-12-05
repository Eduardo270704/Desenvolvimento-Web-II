import React, { useState } from "react";
import styled from "styled-components";
import { useWord } from "../../hooks";

const StyledInputForm = styled.div`
  border: 1px solid #555555;
  padding: 10px;
  display: inline-block;

  > label {
    position: relative;

    > input {
      margin-right: 10px;
      width: 200px;
      height: 25px;
      font-size: 12px;
      padding-right: 5px;
      border: 1px solid #000000;
      border-radius: 5px;
    }
  }

  > button {
    margin-top: 5px;
    margin-right: 8px;
    width: 100px;
    height: 30px;
    border: none;
    background: #888888;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Form: React.FC = () => {
  const { create } = useWord();
  const [word, setWord] = useState("");

  const extractAndCreate = async () => {
    try {
      await create(word);
      setWord(""); // Limpar o campo após a criação bem-sucedida
    } catch (error) {
      console.error("Erro ao criar a palavra:", error);
    }
  };

  return (
    <StyledInputForm>
      <label htmlFor="word">
        <input
          id="word"
          type="text"
          placeholder="Digite sua palavra"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </label>
      <button id="addWord" onClick={extractAndCreate}>
        Salvar
      </button>
    </StyledInputForm>
  );
};

export default Form;
