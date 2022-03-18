import { useLanguage } from '../../hooks/useLanguage';
import { information } from '../../i18n';
import styles from './styles.module.css';

export const Footer = () => {
  const { state } = useLanguage();
  const { author } = information[state.language].footer;

  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Adri-Antanon/i18n-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        {author} <span>♥</span>
      </a>
    </footer>
  );
};
