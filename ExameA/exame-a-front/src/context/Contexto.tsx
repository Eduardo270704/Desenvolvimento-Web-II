import { createContext, useEffect, useState } from "react";
import { ContextProps, NameProps } from "../types";
import service from "../services";

export const Contexto = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [names, setNames] = useState([] as NameProps[]);
  const [column, setColumn] = useState("firstname");

  const list = async () => {
    try {
      const data = await service.list(column);
      setNames(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const create = async (name: NameProps) => {
    try {
      const data = await service.create(name.firstname, name.lastname);
      setNames([...names, data]);
    } catch (error) {
      console.error("Erro ao criar nome:", error);
    }
  };

  const remove = async (name: NameProps) => {
    try {
      await service.remove(String(name.id));
      setNames(names.filter((n) => n.id !== name.id));
    } catch (error) {
      console.error("Erro ao remover nome:", error);
    }
  };

  useEffect(() => {
    list();
  }, [column]);

  return (
    <Contexto.Provider value={{ names, setColumn, create, remove }}>
      {children}
    </Contexto.Provider>
  );
}
