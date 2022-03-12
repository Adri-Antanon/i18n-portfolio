import { createContext, useState, useCallback, useEffect } from 'react';

const initialState = false;
const I18nContext = createContext(initialState);

const I18nProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [language, setLanguage] = useState('es');

  const changeLanguage = useCallback(() => setState((state) => !state), []);

  useEffect(() => {
    if (state) {
      setLanguage('en');
      return;
    }

    setLanguage('es');
  }, [state]);

  return (
    <I18nContext.Provider value={{ language, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
export { I18nContext, I18nProvider };
