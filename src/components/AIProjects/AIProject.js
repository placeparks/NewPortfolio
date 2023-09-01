import React,{useEffect} from 'react'
import LottieLoader from 'react-lottie-loader'
import AI from '../../assets/aibot.json'
import projectData from './AIProjects.json'  // Make sure to import your JSON file
import AOS from 'aos';
import 'aos/dist/aos.css';


function AIProjects() {
  const totalProjects = projectData.length;

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can also add other settings
    });
  }, []);

 
  return (
    <div id='aiprojects' style={{padding:"5%"}}>
    <div style={{display:"flex", flexDirection:"row", marginBottom:"7%"}}>
      <LottieLoader animationData={AI} style={{height:"200px"}} />
      <h1 style={{ fontFamily:'Lobster',color:"#FF6EC7", marginTop:"2%"}}>AI Wonders<br/>
      <span style={{fontSize:"20px"}} data-aos="fade-in"> Total Number of Projects: {totalProjects}
        </span></h1>
      </div>

<div className="container" style={{ color: "white" }}>
        {projectData.map((project, index) => (
          <div className="row" key={index}>
            <div className="col-md-6 w-100">
              <div className="card mb-3" data-aos="zoom-in"  data-aos-easing="ease-in-back" style={{ border: "none", backgroundColor: "transparent" }}>
                <div className="row g-0">
                  <div className={`col-md-4 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                    <img src={project.image} className="img-fluid rounded-start" alt={project.title} />
                  </div>
                  <div className={`col-md-8 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                    <div className="card-body" style={{ fontFamily: 'Ubuntu', textAlign: "left", color: "white" }}>
                      <h5 className="card-title" style={{ fontWeight: "700" }}>{project.title}</h5>
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
            <hr className='mb-4' style={{ color: "white" }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIProjects
