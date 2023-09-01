import React from 'react';
import LottieLoader from 'react-lottie-loader';
import Blockchain from '../../assets/blockchain.json';
import projectData from './Blockchain.json';  // Make sure to import your JSON file

function BlockchainProjects() {
  const totalProjects = projectData.length;
  return (
    <div id='blockchain' style={{ padding: "5%", backgroundColor: "yellowgreen" }}>
    <div style={{ display: "flex", flexDirection: "row", marginBottom: "7%" }}>
      <LottieLoader animationData={Blockchain} style={{ height: "200px" }} />
      <h1 style={{ fontFamily: 'Lobster', color: "red", marginTop: "2%" }}>
        Blockchain Apps
        <br/>
        <span style={{fontSize:"20px"}}>
          Total Number of Projects: {totalProjects}
        </span>
      </h1>
    </div>

      <div className="container" style={{ color: "white" }}>
        {projectData.map((project, index) => (
          <div className="row" key={index}>
            <div className="col-md-6 w-100">
              <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
                <div className="row g-0">
                  <div className={`col-md-4 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                    <img src={project.image} className="img-fluid rounded-start" alt={project.title} />
                  </div>
                  <div className={`col-md-8 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                    <div className="card-body" style={{ fontFamily: 'Ubuntu', textAlign: "left", color: "white" }}>
                      <h5 className="card-title" style={{ fontWeight: "700", color: "darkgreen" }}>{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className="btn"
                        style={{
                          backgroundColor: "#f0f0f0", color: "black", border: "none",
                          borderRadius: "5px", fontWeight: "bold", cursor: "pointer"
                        }}
                      >
                        Go to Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='mb-4' style={{ color: "darkgreen" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockchainProjects;
