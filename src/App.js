import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/index'
import Home from './components/Home/index'
import Checkout from './components/Checkout/index'



function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
   
  );
}

export default App;
