import { information } from '../../i18n';
import { useLanguage } from '../../hooks/useLanguage';

import styles from './styles.module.css';

export const Projects = () => {
  const { state } = useLanguage();
  const { projectsInfo: projects, title } =
    information[state.language].projects;

  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">{title}</h2>

      <div className={styles.projects__container}>
        {projects.map((project) => (
          <div key={project.id}>
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
