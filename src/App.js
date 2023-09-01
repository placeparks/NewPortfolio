import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import ChatBot from './components/ChatBot';
import AIProjects from './components/AIProjects/AIProject';
import BlockchainProjects from './components/BlockchainProjects/BlockchainProjects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <ChatBot /> 
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='#aiprojects' element={<AIProjects/>}/>
          <Route path='#blockchain' element={<BlockchainProjects/>}/>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
