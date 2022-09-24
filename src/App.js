import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter, Router } from 'react-router-dom';

import Home from './components/Home'
import Main from './components/Main'
import MenuCatalog from './components/MenuCatalog';
import Test from './components/Test';

function App() {
  return (
    <div className="Wrapper">
      <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Main" element={<Main/>}/>
            <Route path="/" element={<MenuCatalog/>}/>
            <Route path="/" element={<Test/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
