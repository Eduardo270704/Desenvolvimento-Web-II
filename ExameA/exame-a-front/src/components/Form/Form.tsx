import React, { useState } from "react";
import styled from "styled-components";
import { useName } from "../../hooks";

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
  const { create } = useName();
  const [fullName, setFullName] = useState("");

  const extractAndCreate = async () => {
    const words = fullName.split(" ");
    const firstName = words[0];
    const lastName = words[words.length - 1];

    if (firstName && lastName) {
      try {
        await create({ firstname: firstName, lastname: lastName });
        setFullName(""); // Limpar o input após o envio
      } catch (error) {
        console.error("Erro ao criar nome:", error);
      }
    }
  };

  return (
    <StyledInputForm>
      <label htmlFor="fullName">
        <input
          id="fullName"
          type="text"
          placeholder="Digite o nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <button id="addName" onClick={extractAndCreate}>
        Salvar
      </button>
    </StyledInputForm>
  );
};

export default Form;
