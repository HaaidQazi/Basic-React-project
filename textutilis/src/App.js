import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [color, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      setColor('light');
      showAlert("Dark has been set", "success");
    }
    else {

      setMode('light');
      setColor('dark');
      showAlert("Light has been set", "success");
    }

  }
  return (
    <>
      <BrowserRouter>
        <Navbar navy="Nav" feat="features"></Navbar>
        <Routes>
          <Route path="/" element={<Textform enter="Enter your name" mode={mode} togglemode={togglemode}></Textform>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Routes>
        <Alert alert={alert} showAlert={showAlert}></Alert>

      </BrowserRouter>
    </>
  );
}

export default App;
