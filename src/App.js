import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/index'
import Home from './components/Home/index'
import Checkout from './components/Checkout/index'
import Login from './components/Login/index'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'
import { useStateValue } from './context/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS -> ', authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
