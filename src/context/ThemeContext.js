// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    // Lógica para calcular o contraste ou outras operações relacionadas ao tema
    const componentColor = '#FF0000'; // Cor do componente
    const contrastThreshold = 128;

    const contrast = calculateContrast(backgroundColor, componentColor);

    if (contrast < contrastThreshold) {
      // Se necessário, atualize o tema aqui
      // setBackgroundColor(novaCor);
    }
  }, [backgroundColor]);

  const setTheme = (color) => {
    setBackgroundColor(color);
  };

  return (
    <ThemeContext.Provider value={{ backgroundColor, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
