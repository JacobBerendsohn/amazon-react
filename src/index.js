import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './context/reducer';
import { ResultContextProvider } from './context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </StateProvider>
  </ResultContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
