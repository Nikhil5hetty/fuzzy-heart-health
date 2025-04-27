import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-globally';

const initialState = {
  gender: 0,
  age: 0,
  hypertension: 0,
  heart_disease: 0,
  ever_married: 0,
  work_type: 0,
  residence_type: 0,
  avg_glucose_level: 0,
  bmi: 0,
  smoking_status: 0
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <Provider globalState={initialState}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts";
import Dashboard from "./pages/Dashboard";
import TopNav from "./components/TopNav";
import Evaluation1 from "./pages/Evaluation1";
import Evaluation2 from "./pages/Evaluation2";
import Evaluation3 from "./pages/Evaluation3";
import Evaluation4 from "./pages/Evaluation4";
import Evaluation5 from "./pages/Evaluation5";


export default function App() {
  return (
    <>
      <TopNav/>
      <div className="max-w-6xl m-auto mb-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Evaluation1/>} />
            <Route path="/evaluation2" element={<Evaluation2/>} />
            <Route path="/evaluation3" element={<Evaluation3/>} />
            <Route path="/evaluation4" element={<Evaluation4/>} />
            <Route path="/evaluation5" element={<Evaluation5/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
