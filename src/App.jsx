import './App.css';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { home } from './i18n';

function App() {
  const { language, changeLanguage } = useLanguage();
  const { toggle, toggleFunction } = useTheme();

  return (
    <div className={`App ${toggle ? 'dark' : 'light'}`}>
      <header className={`App-header ${toggle ? 'dark' : 'light'} `}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        {toggle ? <p>True</p> : <p>false</p>}
        <button onClick={() => toggleFunction()}>Change theme</button>
        <p>{home[language].hello}</p>
        <p>{home[language].goodbye}</p>
        <button onClick={changeLanguage}>Change</button>
      </header>
    </div>
  );
}

export default App;
