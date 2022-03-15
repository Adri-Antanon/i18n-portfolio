import { About, Footer, Header, Projects, Skills } from './components';
import { useTheme } from './hooks/useTheme';

import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
