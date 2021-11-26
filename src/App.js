import logo from './logo.svg';
import './App.css';
import EmailContainer from './containers/EmailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Temporary Email</h1>
      </header>
      <main className="Body">
        <EmailContainer />
      </main>
    </div>
  );
}

export default App;
