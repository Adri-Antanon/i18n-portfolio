import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { useLanguage } from '../../hooks/useLanguage';
import { information } from '../../i18n';

import styles from './styles.module.css';

export const AboutMe = () => {
  const { state } = useLanguage();
  const { description, resume, resumeUrl, social, title } =
    information[state.language].about;

  return (
    <section id="about" className="section">
      <h2 className="section__title">{title}</h2>

      <div className={`centered ${styles.about}`}>
        <article className={styles.about__info}>
          <p className={styles.about__desc}>{description && description}</p>

          <div className={`centered ${styles.about__contact}`}>
            {resume && (
              <a
                href={resumeUrl}
                type="button"
                rel="noopener noreferrer"
                target="_blank"
                download
              >
                <span type="button" className="btn btn--outline">
                  {resume}
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link link--icon"
                  >
                    <BsGithub />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link link--icon"
                  >
                    <BsLinkedin />
                  </a>
                )}
              </>
            )}
          </div>
        </article>
        <div className={styles.about__image}>
          <img src="avatar.png" alt="author of website" />
        </div>
      </div>
    </section>
  );
};
