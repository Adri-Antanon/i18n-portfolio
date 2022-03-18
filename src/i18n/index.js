import { headerEn, navbarEn, footerEn, projectsEn, aboutEn } from './en';
import { headerEs, navbarEs, footerEs, projectsEs, aboutEs } from './es';

const information = {
  es: {
    header: { ...headerEs },
    navbar: { ...navbarEs },
    footer: { ...footerEs },
    projects: { ...projectsEs },
    about: { ...aboutEs },
  },
  en: {
    header: { ...headerEn },
    navbar: { ...navbarEn },
    footer: { ...footerEn },
    projects: { ...projectsEn },
    about: { ...aboutEn },
  },
};

export { information };
