import logo from './logo.svg';
// import './App.css';
import CountdownTimer from './Timer.js'
import Getdate from './data.js'




function App() {
  return (
    <div className="App">
      <header className="App-header">
     
     
      <Getdate></Getdate>
        <CountdownTimer></CountdownTimer>
     
  
       
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
