import english from './en/test';
import headerEn from './en/header';
import navbarEn from './en/navbar';
import footerEn from './en/footer';

import spanish from './es/test';
import headerEs from './es/header';
import navbarEs from './es/navbar';
import footerEs from './es/footer';

const information = {
  es: {
    test: { ...spanish },
    header: { ...headerEs },
    navbar: { ...navbarEs },
    footer: { ...footerEs },
  },
  en: {
    test: { ...english },
    header: { ...headerEn },
    navbar: { ...navbarEn },
    footer: { ...footerEn },
  },
};

export { information };
