import React, { useEffect } from "react";
import styled from "styled-components";
import { ContextProps } from "../../types";
import { useName } from "../../hooks";

const StyledResultList = styled.div`
  margin-top: 8px;
  padding-left: 10px;

  > div {
    margin-bottom: 8px;
  }

  .namePart {
    &:hover {
      color: red;
      cursor: pointer;
    }

    &:active {
      /* Adiciona um estilo ao clicar no elemento */
      font-weight: bold;
    }
  }
`;

const List: React.FC = () => {
  const { names, setColumn, create, remove } = useName();

  useEffect(() => {
    console.log("Itens da função list:", names);
  }, [names]);

  const handleNameClick = async (id: number | undefined) => {
    if (id !== undefined) {
      // Faça a consulta no servidor para obter os dados ordenados pelo campo nome
      // Implemente essa lógica com base na sua API
      console.log(`Consulta para obter dados por nome com ID ${id}`);
    }
  };

  const handleLastNameClick = async (id: number | undefined) => {
    if (id !== undefined) {
      // Faça a consulta no servidor para obter os dados ordenados pelo campo sobrenome
      // Implemente essa lógica com base na sua API
      console.log(`Consulta para obter dados por sobrenome com ID ${id}`);
    }
  };

  const handleRemove = async (id: number | undefined) => {
    if (id !== undefined) {
      // Faça a consulta no servidor para remover o registro
      try {
        await remove({ id, firstname: "", lastname: "" }); // Você precisa ajustar os parâmetros conforme necessário
        console.log(`Registro removido com sucesso: ID ${id}`);
      } catch (error) {
        console.error(`Erro ao remover o registro: ${error}`);
      }
    }
  };

  return (
    <StyledResultList>
      {names?.map(({ id, firstname, lastname }) => (
        <div key={id}>
          <span
            className="namePart"
            onClick={() => handleNameClick(id)}
            onContextMenu={(e) => {
              e.preventDefault();
              handleRemove(id);
            }}
          >
            {firstname}
          </span>{" "}
          <span
            className="namePart"
            onClick={() => handleLastNameClick(id)}
            onContextMenu={(e) => {
              e.preventDefault();
              handleRemove(id);
            }}
          >
            {lastname}
          </span>
        </div>
      ))}
    </StyledResultList>
  );
};

export default List;
