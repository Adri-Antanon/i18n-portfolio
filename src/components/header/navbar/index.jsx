import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';

import styles from './styles.module.css';
import { information } from '../../../i18n';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { state, dispatch } = useLanguage();

  const { projects, projectsTitle, skills, contact } =
    information[state.language].navbar;

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {projects && (
          <li className={styles.item}>
            <a href="#projects" className="link link--nav">
              {projectsTitle || 'Projects'}
            </a>
          </li>
        )}

        {skills && (
          <li className={styles.item}>
            <a href="#skills" className="link link--nav">
              Skills
            </a>
          </li>
        )}

        {contact && (
          <li className={styles.item}>
            <a href="#contact" className="link link--nav">
              Contact
            </a>
          </li>
        )}
      </ul>

      <section className={styles.nav__icons}>
        <span
          type="button"
          onClick={toggleTheme}
          className={`btn btn--icon ${styles.nav__theme}`}
          aria-label="toggle theme"
        >
          {theme === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </span>
        <span
          type="button"
          onClick={() => dispatch({ type: 'es' })}
          className={`btn btn--icon ${styles.nav__language}`}
          aria-label="toggle theme"
        >
          ES
        </span>
        <span
          type="button"
          onClick={() => dispatch({ type: 'en' })}
          className={`btn btn--icon ${styles.nav__language}`}
          aria-label="toggle theme"
        >
          EN
        </span>
      </section>
    </nav>
  );
};
