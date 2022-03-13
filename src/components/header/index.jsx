import { Navbar } from './navbar';
import { useLanguage } from '../../hooks/useLanguage';

import styles from './styles.module.css';
import { information } from '../../i18n';

export const Header = () => {
  const { state } = useLanguage();

  const { title, homepage } = information[state.language].header;
  return (
    <header className={`${styles.header} centered`}>
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};
