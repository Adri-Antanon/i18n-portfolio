import { useContext } from 'react';
import { I18nContext } from '../context/i18nContext';

export const useLanguage = () => useContext(I18nContext);
