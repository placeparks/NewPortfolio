import React from 'react'
import LottieLoader from 'react-lottie-loader'
import AI from '../assets/aibot.json'
import { hover } from '@testing-library/user-event/dist/hover'

function AIProjects() {
  return (
    <div style={{padding:"5%"}}>
    <div style={{display:"flex", flexDirection:"row", marginBottom:"7%"}}>
      <LottieLoader animationData={AI} style={{height:"200px"}} />
      <h1 style={{ fontFamily:'Lobster',color:"#FF6EC7", marginTop:"2%"}}>AI Wonders</h1>
      </div>


   <div className="container" style={{color:"white"}}>
   <div className="row">
  <div className="col-md-6 w-100">
    <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
      <div className="row g-0">
        <div className="col-md-4 order-md-1 mt-4">
          <img src="images/AIProjects/identifier.PNG" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 order-md-2">
          <div className="card-body" style={{ fontFamily: 'Ubuntu', textAlign: "left", color: "white" }}>
            <h5 className="card-title" style={{ fontWeight: "700" }}>AI Identifier</h5>
            <p className="card-text">Presenting my AI Image Identifier—an innovation that employs advanced AI and deep learning to swiftly and precisely identify items from uploaded images. This project highlights my commitment to leveraging technology for seamless item recognition, underscoring the transformative power of AI in enhancing visual data interaction.</p>
            <button 
            onClick={() => window.open("https://ai-identifier.vercel.app/", "_blank")}
            className="btn" 
            style={{ backgroundColor: "#f0f0f0", color: "black", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer"}} >
              Go to Link
            </button>
                     </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <hr className='mb-4'/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2">
                  <img src="images/AIProjects/ASR.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-1">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700"}}>Automatic Speech Recognition</h5>
        <p className="card-text">Using advanced AI and neural networks, this technology converts spoken language into accurate text, showcasing its potential in accessibility, transcription services, and voice-controlled applications. Experience the future of communication with ASR.</p>
        <button 
            onClick={() => window.open("https://ai-whisper-six.vercel.app/", "_blank")}
            className="btn" 
            style={{ backgroundColor: "#f0f0f0", color: "black", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer"}} >
              Go to Link
            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mb-4'/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-1">
                  <img src="images/AIProjects/recipe.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-2">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700"}}>A Healthy Recipe in no time!</h5>
        <p className="card-text">My AI-powered solution for generating nutritious recipes from your ingredients. Experience cooking convenience and innovation like never before.</p>
        <button 
            onClick={() => window.open("https://airec.vercel.app/", "_blank")}
            className="btn" 
            style={{ backgroundColor: "#f0f0f0", color: "black", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer"}} >
              Go to Link
            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mb-4'/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2">
                  <img src="images/AIProjects/pdf.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-1">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700"}}> PDF Loader project</h5>
        <p className="card-text">A versatile tool designed to enhance document interaction. With the ability to upload PDF files, users can request summaries or ask questions about the content. This project showcases my commitment to streamlining information access and highlights the potential of AI in transforming document management and comprehension.</p> 
        <button 
            onClick={() => window.open("https://pdf-chatbot-olive.vercel.app/", "_blank")}
            className="btn" 
            style={{ backgroundColor: "#f0f0f0", color: "black", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer"}} >
              Go to Link
            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
</div>
    </div>
  )
}

export default AIProjects
