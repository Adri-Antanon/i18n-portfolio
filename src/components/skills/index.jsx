import { skillList } from './skillsData';

import styles from './styles.module.css';

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <ul className={styles.skills__container}>
        {skillList.map((skill) => (
          <li key={skill.name} className={styles.skills__item}>
            <img src={skill.src} alt={skill.name} />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
