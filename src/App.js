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
import PWAProjects from './components/PWAProjects/PWAProjects';
import Websites from './components/Websites/Websites';
import Contact from './components/Contact/Contact';
import {AboutRefProvider} from './components/AboutRefContext';

function App() {
  return (
    <div className="App">
      <AboutRefProvider>
      <BrowserRouter>
      <Navbar/>
    <ChatBot /> 
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='#aiprojects' element={<AIProjects/>}/>
          <Route path='#blockchain' element={<BlockchainProjects/>}/>
          <Route path='#mern' element={<MernProjects/>}/>
          <Route path='#pwa' element={<PWAProjects/>}/>
          <Route path='#websites' element={<Websites/>}/>
        </Routes>
      </BrowserRouter>
      </AboutRefProvider>
    </div>
  );
}

export default App;
