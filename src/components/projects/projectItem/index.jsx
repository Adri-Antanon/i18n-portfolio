import { BsGithub } from 'react-icons/bs';
import { MdOutlineLaunch } from 'react-icons/md';

import styles from './styles.module.css';

export const ProjectItem = ({ project }) => {
  const { title, image, demo, source, stack, description } = project;
  return (
    <div className={styles.project}>
      <img className={styles.project__image} src={image} alt={title} />
      <h5 className={styles.project__title}>{title}</h5>
      {stack && (
        <ul className={styles.project__stack}>
          {stack.map((tech) => (
            <li
              key={`${tech}-${title}`}
              className={styles['project__stack--item']}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      <p className={styles.project__description}>{description}</p>
      {source && (
        <a href={source} className="link link--icon">
          <BsGithub />
        </a>
      )}

      {demo && (
        <a href={demo} className="link link--icon">
          <MdOutlineLaunch />
        </a>
      )}
    </div>
  );
};
