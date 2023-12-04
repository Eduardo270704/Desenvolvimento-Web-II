import { useContext } from "react";
import { Contexto } from "../context";

const useName = () => {
  const context = useContext(Contexto);

  if (!context) {
    throw new Error("useName deve ser usado dentro de um Provider");
  }

  return context;
};

export { useName };
