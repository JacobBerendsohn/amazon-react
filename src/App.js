import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header/index'
import Home from './components/Home/index'
import Checkout from './components/Checkout/index'
import Login from './components/Login/index'



function App() {
  return (

    <div className="app">
      <Routes>
          <Route path='/' element={[<Header />,<Home />]} />
          <Route path='/checkout' element={[<Header />,<Checkout />]} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
   
  );
}

export default App;
