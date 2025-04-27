import Evaluation1 from "./pages/Evaluation1";
import Evaluation2 from "./pages/Evaluation2";
import { Route, Routes } from "react-router-dom";
import Evaluation3 from "./pages/Evaluation3";
import Evaluation4 from "./pages/Evaluation4";
import Evaluation5 from "./pages/Evaluation5";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>

       {/* <div className="max-w-6xl m-auto mb-20">
       <Evaluation1/>
       <Evaluation2/>
       </div> */}

       

       <Routes>
          <Route path="/" element={<Evaluation1/>} />
          <Route path="/evaluation2" element={<Evaluation2/>} />
          <Route path="/evaluation3" element={<Evaluation3/>} />
          <Route path="/evaluation4" element={<Evaluation4/>} />
          <Route path="/evaluation5" element={<Evaluation5/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
       
    </>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
*/
