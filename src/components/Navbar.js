import React, {useState} from 'react'
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import Chatbot from './ChatBot'; // Import your Chatbot component

const Navbar = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return(

      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mirac.Eth</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <Link className="nav-link" to="about" smooth={true} duration={1000}>About</Link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portfolio
          </a>
          <ul className="dropdown-menu">
    <li>
      <Link className="dropdown-item" to="aiprojects" smooth={true} duration={1000}>
        AI Projects
      </Link>
    </li>
    <li>      <Link className="dropdown-item" to="blockchain" smooth={true} duration={1000}>
        Blockchain Projects
      </Link></li>
      <li>      <Link className="dropdown-item" to="mern" smooth={true} duration={1000}>
       Mern Projects
      </Link></li>
      <li>      <Link className="dropdown-item" to="pwa" smooth={true} duration={1000}>
       PWA Projects
      </Link></li>
      <li>      <Link className="dropdown-item" to="websites" smooth={true} duration={1000}>
       Websites
      </Link></li>
      <li>      <Link className="dropdown-item" to="uniswap" smooth={true} duration={1000}>
       Uniswap Apps
      </Link></li>
          </ul>
        </li>
        <Link className="nav-link" to="tech" smooth={true} duration={1000}>Technologies</Link>
        <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
           <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          My Tools
          </a>
          <ul className="dropdown-menu">
    <li>
      <NavLink className="dropdown-item" to="https://image-generator-dalle-5f504a8b5537.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Image Generator
      </NavLink>
    </li>
    <li>    <NavLink className="dropdown-item" to="https://grammar-check-baa58ce59eec.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Grammar Check
      </NavLink></li>
       <li>    <NavLink className="dropdown-item" to="https://text-to-speech01-beb9ef261cad.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Text-to-Speech
      </NavLink></li>
      <li>    <NavLink className="dropdown-item" to="https://gitdescriptionbot-fc3daf77924a.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Github Bot
      </NavLink></li>
      <li>    <NavLink className="dropdown-item" to="https://airesume-generator-a20b961d3ccb.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Resume Generator
      </NavLink></li>
      <li>  <NavLink className="dropdown-item" to="https://socialmedia-post-generator-43bba1126621.herokuapp.com/" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Socialmedia Post Generator
      </NavLink> </li>
       <li>  <NavLink className="dropdown-item" to="https://mediafiles.botpress.cloud/4f6866ad-43e3-4ed7-96a1-ec495d4d3052/webchat/bot.html" target="_blank" rel="noreferrer" smooth={true} duration={1000}>
      Pakistan Constitutional Helper
      </NavLink> </li>
          </ul>
        </li>
        {/*<button onClick={toggleChat} className="btn btn-primary d-md-inline-block d-lg-none">
    Chatbot
  </button>*/}
      </div>
    </div>
  </div>
 {/* <button onClick={toggleChat} className="btn btn-primary d-md-inline-block d-none">
                Chatbot
</button>*/}
            </nav>
            <div className={`modal ${showChat ? 'show d-block' : 'd-none'}`} tabIndex="-1" style={{ overflow: "auto" }}>
  <div className="modal-dialog modal-dialog-centered" style={{ width: "100%", margin: "0", left: "0" }}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Chatbot</h5>
        <button type="button" className="btn-close" onClick={toggleChat}></button>
      </div>
      <div className="modal-body">
        <Chatbot />
      </div>
    </div>
  </div>
</div>

 </div>
    );
}

export default Navbar
