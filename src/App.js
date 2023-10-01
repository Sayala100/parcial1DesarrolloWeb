import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Login from './login';
import Book from './carro';
import Books from './carros';
import Login2 from './login2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/carros" element={<Books />} />
          <Route path="/carros/:modelo" element={<Book />} />
          <Route path="/1/:email" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
