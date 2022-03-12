// import Navbar from '../Navbar/Navbar';
import styles from './styles.module.css';

export const Header = ({ information }) => {
  const { title, homepage } = information;
  return (
    <header className={`${styles.header} center`}>
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {/* <Navbar /> */}
    </header>
  );
};
