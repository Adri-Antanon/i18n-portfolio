import './App.css';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { information } from './i18n';
import { Header } from './components';

function App() {
  const { toggle, toggleFunction } = useTheme();
  const { state, dispatch } = useLanguage();

  return (
    <div className={`App ${toggle ? 'dark' : 'light'}`}>
      <Header information={information[state.language].header} />
      <header className={`App-header ${toggle ? 'dark' : 'light'} `}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        {toggle ? <p>True</p> : <p>false</p>}
        <button onClick={() => toggleFunction()}>Change theme</button>
        <p>{information[state.language].test.hello}</p>
        <p>{information[state.language].test.goodbye}</p>
        <button onClick={() => dispatch({ type: 'en' })}>English</button>
        <button onClick={() => dispatch({ type: 'es' })}>Spanish</button>
      </header>
    </div>
  );
}

export default App;
