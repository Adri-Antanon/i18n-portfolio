import { createContext, useState } from 'react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    console.log("it's working");
    setToggle((prevValue) => !prevValue);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
