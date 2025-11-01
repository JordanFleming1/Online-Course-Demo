import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({ darkMode: false, setDarkMode: () => {} });

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return typeof document !== 'undefined' && document.documentElement.classList.contains('dark-mode');
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
