import english from './en/test';
import headerEn from './en/header';
import navbarEn from './en/navbar';
import footerEn from './en/footer';
import projectsEn from './en/projects';

import spanish from './es/test';
import headerEs from './es/header';
import navbarEs from './es/navbar';
import footerEs from './es/footer';
import projectsEs from './es/projects';

const information = {
  es: {
    test: { ...spanish },
    header: { ...headerEs },
    navbar: { ...navbarEs },
    footer: { ...footerEs },
    projects: { ...projectsEs },
  },
  en: {
    test: { ...english },
    header: { ...headerEn },
    navbar: { ...navbarEn },
    footer: { ...footerEn },
    projects: { ...projectsEn },
  },
};

export { information };
