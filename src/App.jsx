import './App.css';
import { ThemeContext } from './context/themeContext';
import { useTheme } from './hooks/useTheme';

function App() {
  const { toggle, toggleFunction } = useTheme(ThemeContext);
  return (
    <div className={`App ${toggle ? 'dark' : 'light'}`}>
      <header className={`App-header ${toggle ? 'dark' : 'light'} `}>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        {toggle ? <p>True</p> : <p>false</p>}
        <button onClick={() => toggleFunction()}>Change theme</button>
      </header>
    </div>
  );
}

export default App;
