import React, { useEffect, useRef } from 'react';
import LottieLoader from 'react-lottie-loader';
import { motion, useAnimation } from 'framer-motion';
import Blockchain from '../../assets/blockchain.json';
import projectData from './Blockchain.json';
import {Tilt} from "react-tilt";
import { fadeIn } from '../../utils/motion';

const buzzEffect = {
  y: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.3,
    yoyo: Infinity,
  },
};

function BlockchainProjects() {
  const totalProjects = projectData.length;

  return (
    <div id='blockchain' style={{ padding: '5%', backgroundColor: 'yellowgreen' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '2%' }}>
        <LottieLoader animationData={Blockchain} style={{ height: '200px' }} />
        <h1 style={{ fontFamily: 'Lobster', color: 'red', marginTop: '2%' }}>
          Blockchain Apps
          <br />
          <motion.span 
            style={{ fontSize: '20px' }} 
            initial={{ y: 0 }} 
            animate={buzzEffect}
          >
            Total Number of Projects: {totalProjects}
          </motion.span>
        </h1>
      </div>
      <div className='container' style={{ color: 'white' }}>
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
              <div className='card-body' style={{ fontFamily: 'Ubuntu', textAlign: 'left', color: 'white' }}>
                <h5 className='card-title' style={{ fontWeight: '700', color: 'darkgreen' }}>
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
      <hr className='mb-4' style={{ color: 'darkgreen' }} />
    </motion.div>
  );
};

export default BlockchainProjects;
