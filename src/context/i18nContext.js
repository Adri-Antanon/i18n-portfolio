import { createContext, useReducer } from 'react';

const initialState = { language: 'en' };
const I18nContext = createContext(initialState);

const i18nReducer = (state, action) => {
  // In case of adding new languages
  switch (action.type) {
    case 'es': {
      return { language: action.type };
    }
    case 'en': {
      return { language: action.type };
    }
    default: {
      return state;
    }
  }
};

const I18nProvider = ({ children }) => {
  const [state, dispatch] = useReducer(i18nReducer, initialState);
  const value = { state, dispatch };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
export { I18nContext, I18nProvider };
