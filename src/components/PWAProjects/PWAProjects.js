import React, { useEffect, useRef } from 'react';
import LottieLoader from 'react-lottie-loader';
import { motion, useAnimation } from 'framer-motion';
import projectData from './PWA.json';
import Pwa from '../../assets/pwa.json';
import {Tilt} from "react-tilt";
import { fadeIn } from '../../utils/motion';

const buzzEffect = {
  y: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.3,
    yoyo: Infinity,
  },
};

function PWAProjects() {
  const totalProjects = projectData.length;

  const smallScreenStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  const largeScreenStyle = {
    flexDirection: 'row',
    marginBottom: '2%'
  };

  const smallScreenTextStyle = {
    width: '90vw',
    fontSize: '16px'
  };

  const largeScreenTextStyle = {
    width: '100vh',
    fontSize: '20px'
  };

  return (
    <div id='pwa' style={{marginTop:"5%", padding: '5%', backgroundColor: "#ffed45" }}>
      <div style={{ display: 'flex', ...((window.innerWidth <= 768) ? smallScreenStyle : largeScreenStyle) }}>
        <LottieLoader animationData={Pwa} style={{ height: '210px', marginBottom: window.innerWidth <= 768 ? '20px' : '0px' }} />
        <h1 style={{ color: 'black', marginTop: '3%' }}>
          Progressive Web Apps
          <br />
          <p style={{...((window.innerWidth <= 768) ? smallScreenTextStyle : largeScreenTextStyle), paddingTop:"2%", marginBottom:"-20px"}}>
            Experience the future with Progressive Web Apps (PWAs). No downloads, no updates—simply open your browser, visit the PWA site, and you're in! Enjoy lightning-fast load times, offline access, and the freedom to explore. Say goodbye to app store hassles and hello to a smoother, more efficient web experience!
          </p>
          <br/>
          <motion.span 
            style={{ fontSize: '20px'}} 
            initial={{ y: 0 }} 
            animate={buzzEffect}
          >
            Total Number of Projects: {totalProjects}
          </motion.span>
        </h1>
      </div>
      <div style={{color:"black",  marginBottom:"5%"}}>
        <h3>Installation Instructions</h3>
      <ul style={{listStyleType:"none"}}>
      <p>📱 On Android:</p>
      <li >1. Open the PWA site in Chrome</li>
      <li>2. Tap the three-dot menu in the top right corner</li>
          <li>Select 'Add to Home screen'🚀</li>
      <p>🍎 On iOS:</p>
      <li>1. Open the PWA site in Safari</li>
      <li>2. Tap the share button at the bottom of the screen</li>
          <li>Select 'Add to Home Screen'🚀</li>
          <p>🖥️ On Desktop:</p>
          <li>1. Open the PWA site in Chrome</li>
          <li>2. Click the plus sign in the address bar</li>
          <li>Select 'Install'🚀</li>
          </ul>
      </div>
      
      <div className='container' style={{ color: 'black' }}>
        {projectData.map((project, index) => (
          <Card project={project} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ project, index }) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          });
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      className='row'
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
    >
      <div className='col-md-6 w-100'>
        <div className='card mb-3' style={{ border: 'none', backgroundColor: 'transparent' }}>
          <div className='row g-0'>
            <div className={`col-md-4 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
                <img src={project.image} className='img-fluid rounded-start' alt={project.title} />
                </motion.div>
              </Tilt>
      
            </div>

            <div className={`col-md-8 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
              <div className='card-body' style={{ fontFamily: 'Ubuntu', textAlign: 'left', color: 'black' }}>
                <h5 className='card-title' style={{ fontWeight: '700', color: 'black' }}>
                  {project.title}
                </h5>
                <div className='card-text'>
                {project.description.split("\n").map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                })}
              </div>
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className='btn'
                  style={{
                    backgroundColor: '#f0f0f0',
                    color: 'black',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop:"1%"
                  }}
                >
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-4' style={{ color: 'black' }} />
    </motion.div>
  );
};

export default PWAProjects;
