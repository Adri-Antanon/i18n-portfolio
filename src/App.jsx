import { Intro, Footer, Header, Projects, Skills, AboutMe } from './components';
import { useTheme } from './hooks/useTheme';

import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <AboutMe />
        {/* AboutMe */}
        {/* Contact */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
