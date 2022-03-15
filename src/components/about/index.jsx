import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { useLanguage } from '../../hooks/useLanguage';
import { information } from '../../i18n';

import styles from './styles.module.css';

export const About = () => {
  const { state } = useLanguage();
  const { about } = information[state.language];
  const { name, role, description, resume, resumeUrl, social } = about;

  return (
    <div className={`centered ${styles.about}`}>
      {name && (
        <h1>
          Hi, I'm <span className={styles.about__name}>{name}.</span>
        </h1>
      )}

      {role && <h2 className={styles.about__role}>A {role}.</h2>}
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
    </div>
  );
};
