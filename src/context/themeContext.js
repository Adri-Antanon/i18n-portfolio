import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const checkDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(checkDarkTheme.matches ? 'dark' : 'light');
    checkDarkTheme.addEventListener('change', (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
