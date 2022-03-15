import { skillList } from './skillsData';

import styles from './styles.module.css';

export const Skills = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Skills</h2>
      <div className={styles.skills__container}>
        {skillList.map((skill) => (
          <div className={styles.skills__item}>
            <img src={skill.src} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
