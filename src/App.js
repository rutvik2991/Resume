import logo from './logo.svg';
import './App.css';
import Bgmi from './images/Rutvik_Header_Bg.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Bgmi} className='App-logo' alt="image" />
        
        <p>
         This Site under Consturction Rutvik Haripara's Resume Live At Some time
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rutvik-haripara-81425320b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Profile
        </a>
      </header>
    </div>
  );
}

export default App;
