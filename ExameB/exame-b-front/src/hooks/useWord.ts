import { useContext } from "react";
import { Contexto, Provider } from "../contexts";

const useWord = () => {
  const context = useContext(Contexto);
  if (!context) {
    throw new Error("useWord deve ser usado dentro de um Provider");
  }
  return context;
};

export { useWord, Provider };
