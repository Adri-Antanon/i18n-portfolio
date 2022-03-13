import english from './en/test';
import headerEn from './en/header';
import navbarEn from './en/navbar';

import spanish from './es/test';
import headerEs from './es/header';
import navbarEs from './es/navbar';

const information = {
  es: {
    test: { ...spanish },
    header: { ...headerEs },
    navbar: { ...navbarEs },
  },
  en: {
    test: { ...english },
    header: { ...headerEn },
    navbar: { ...navbarEn },
  },
};

export { information };
