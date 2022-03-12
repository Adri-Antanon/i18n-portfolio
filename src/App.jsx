import './App.css';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { home } from './i18n';

function App() {
  const { toggle, toggleFunction } = useTheme();
  const { state, dispatch } = useLanguage();

  console.log(state, dispatch);

  return (
    <div className={`App ${toggle ? 'dark' : 'light'}`}>
      <header className={`App-header ${toggle ? 'dark' : 'light'} `}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        {toggle ? <p>True</p> : <p>false</p>}
        <button onClick={() => toggleFunction()}>Change theme</button>
        <p>{home[state.language].hello}</p>
        <p>{home[state.language].goodbye}</p>
        <button onClick={() => dispatch({ type: 'en', language: 'en' })}>
          English
        </button>
        <button onClick={() => dispatch({ type: 'es', language: 'es' })}>
          Spanish
        </button>
      </header>
    </div>
  );
}

export default App;
