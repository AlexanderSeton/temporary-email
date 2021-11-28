import logo from './logo.svg';
import './App.css';
import EmailContainer from './containers/EmailContainer';

function App() {

  const handleDarkModeClick = function() {
    const documentBody = document.body;
    documentBody.classList.toggle("dark-mode");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Temporary Email</h1>
        <button onClick={handleDarkModeClick} className="dark-mode-button">Dark Mode</button>
      </header>
      <main className="Body">
        <EmailContainer />
      </main>
    </div>
  );
}

export default App;
