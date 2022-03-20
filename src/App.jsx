import ScrollToTop from 'react-scroll-to-top';

import { Intro, Footer, Header, Projects, Skills, AboutMe } from './components';

import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <ScrollToTop
        smooth
        style={{ backgroundColor: theme === 'light' ? '#fcfcfc' : '#080819' }}
        color={theme === 'light' ? '#1e63b8' : '#4d5499'}
      />
      <Header />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
