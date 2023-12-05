import { createContext, useEffect, useState } from "react";
import { ContextProps, WordProps, ResponseProps } from "../types";
import service from "../services";

export const Contexto = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [words, setWords] = useState([] as WordProps[]);

  const list = async () => {
    try {
      const data = await service.list();
      setWords(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const create = async (name: string) => {
    try {
      const newWord = await service.create(name);
      setWords((prevWords) => [...prevWords, newWord]);
    } catch (error) {
      console.error("Erro ao criar palavra:", error);
    }
  };

  const remove = async (id: number) => {
    try {
      await service.remove(id);
      setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    } catch (error) {
      console.error("Erro ao remover palavra:", error);
    }
  };

  useEffect(() => {
    list();
  }, []);

  return (
    <Contexto.Provider value={{ words, create, remove }}>
      {children}
    </Contexto.Provider>
  );
}
