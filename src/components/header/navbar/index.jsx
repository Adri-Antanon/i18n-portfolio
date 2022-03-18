import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';

import styles from './styles.module.css';
import { information } from '../../../i18n';

const availableLanguages = [{ type: 'es' }, { type: 'en' }];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { state, dispatch } = useLanguage();

  const { projects, projectsTitle, skills, about } =
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

        {about && (
          <li className={styles.item}>
            <a href="#about" className="link link--nav">
              About
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
          {theme !== 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </span>
        {availableLanguages.map((availableLanguage) => (
          <span
            key={availableLanguage.type}
            type="button"
            onClick={() => dispatch({ type: availableLanguage.type })}
            className={`btn btn--icon ${styles.nav__language}`}
            aria-label="toggle theme"
          >
            {availableLanguage.type.toUpperCase()}
          </span>
        ))}
      </section>
    </nav>
  );
};
