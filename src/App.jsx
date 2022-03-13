import './App.css';
import { useTheme } from './hooks/useTheme';

import { Footer, Header, Projects } from './components';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
