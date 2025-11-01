import { useContext } from 'react';
import { ThemeContext } from '../context';

/**
 * Custom hook for theme management
 * Provides theme state and toggle functionality
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  const { darkMode, setDarkMode } = context;
  
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };
  
  const setLightMode = () => {
    setDarkMode(false);
  };
  
  const enableDarkMode = () => {
    setDarkMode(true);
  };
  
  return {
    isDarkMode: darkMode,
    isLightMode: !darkMode,
    toggleTheme,
    setLightMode,
    setDarkMode: enableDarkMode,
  };
};