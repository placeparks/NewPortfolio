import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
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
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
