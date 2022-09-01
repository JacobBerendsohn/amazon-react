import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

