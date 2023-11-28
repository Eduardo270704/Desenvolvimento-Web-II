// BotaoContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { Props, ColorProps } from "../types";
import {
  getColorList,
  resetColors,
  updateColor,
} from "../service/colorService";

interface ColorContextProps extends Props {
  resetColors: () => void;
}

export const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colors, setColors] = useState<ColorProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getColorList();
        setColors(response);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    }
    fetchData();
  }, []);

  const handleClique = async (id: number) => {
    try {
      await updateColor(id);
      setColors((colors) =>
        colors.map((color) =>
          color.id === id ? { ...color, count: color.count + 1 } : color
        )
      );
    } catch (error) {
      console.error("Erro ao enviar clique para o backend:", error);
    }
  };

  const resetColorsHandler = async () => {
    try {
      await resetColors();
      setColors((colors) => colors.map((color) => ({ ...color, count: 0 })));
    } catch (error) {
      console.error("Erro ao resetar contadores:", error);
    }
  };

  const contextValue: ColorContextProps = {
    colors,
    handleClique,
    resetColors: resetColorsHandler,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
