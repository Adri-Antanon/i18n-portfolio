import './App.css';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { information } from './i18n';
import { Footer, Header } from './components';

function App() {
  const { theme } = useTheme();
  const { state } = useLanguage();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <main className={`App-header ${theme} `}>
        <p>{information[state.language].test.hello}</p>
        <p>{information[state.language].test.goodbye}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
