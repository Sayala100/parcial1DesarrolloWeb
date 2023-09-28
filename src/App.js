import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Login from './login';
import Book from './book';
import Books from './books';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
