import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import ChatBot from './components/ChatBot';
import AIProjects from './components/AIProjects/AIProject';
import BlockchainProjects from './components/BlockchainProjects/BlockchainProjects';
import MernProjects from './components/MERNStack/MernProjects';
import Uniswap from './components/UniSwap/UniswapProjects';
import PWAProjects from './components/PWAProjects/PWAProjects';
import Websites from './components/Websites/Websites';
import Contact from './components/Contact/Contact';
import Tech from './components/Tech/Tech'
import React, { useState } from 'react';
function App() {

  return (
    <div className='App'>
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='#aiprojects' element={<AIProjects/>}/>
          <Route path='#blockchain' element={<BlockchainProjects/>}/>
          <Route path='#mern' element={<MernProjects/>}/>
          <Route path='#pwa' element={<PWAProjects/>}/>
          <Route path='#websites' element={<Websites/>}/>
          <Route path='#uniswap' element={<Uniswap/>}/>
          <Route path='#tech' element={<Tech/>}/>
          <Route path='#contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
