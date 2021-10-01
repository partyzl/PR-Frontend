import { Navbar } from './layout';
import { PullRequestItem } from './components';
import { MarkdownEditorPage } from './pages';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App container">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <PullRequestItem handle={'@test handle'} stat={'STATUS_CONNECTED'}/>
      </ul>
    </div>
  );
}

export default App;
