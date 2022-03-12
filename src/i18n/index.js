import english from './en/test';
import headerEn from './en/header';
import spanish from './es/test';
import headerEs from './es/header';

const information = {
  es: { test: { ...spanish }, header: { ...headerEs } },
  en: { test: { ...english }, header: { ...headerEn } },
};

export { information };
