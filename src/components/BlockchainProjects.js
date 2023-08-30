import React from 'react'
import LottieLoader from 'react-lottie-loader'
import Blockchain from '../assets/blockchain.json'
import { hover } from '@testing-library/user-event/dist/hover'

function BlockchainProjects() {
  return (
    <div style={{padding:"5%", backgroundColor:"yellowgreen"}}>
    <div style={{display:"flex", flexDirection:"row", marginBottom:"7%"}}>
      <LottieLoader animationData={Blockchain} style={{height:"200px"}} />
      <h1 style={{ fontFamily:'Lobster',color:"red", marginTop:"2%"}}>Blockchain Apps</h1>
      </div>


   <div className="container" style={{color:"white"}}>
   <div className="row">
  <div className="col-md-6 w-100">
    <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
      <div className="row g-0">
        <div className="col-md-4 order-md-1 mt-4">
          <img src="images/BlockchainProjects/unipass.PNG" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 order-md-2">
          <div className="card-body" style={{ fontFamily: 'Ubuntu', textAlign: "left", color: "white" }}>
            <h5 className="card-title" style={{ fontWeight: "700", color:"darkgreen" }}>Account Abstraction</h5>
            <p className="card-text">This project exemplifies the next generation of digital asset management on the Ethereum blockchain by utilizing ERC-4337 Account Abstraction for user authentication. The platform allows users to create and manage non-custodial smart wallets using just a username and password, simplifying the traditionally complex process of private key management. </p>
            <button 
            onClick={() => window.open("https://aa-puce.vercel.app/", "_blank")}
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

        <hr className='mb-4' style={{color:"darkgreen"}}/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2">
                  <img src="images/BlockchainProjects/signin.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-1">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700", color:"darkgreen"}}>WalletConnect Web App</h5>
        <p className="card-text"> No more hassle of username-password combinations or OTPs; simply connect your wallet and gain instant, secure access to a plethora of services. This project stands as a testament to the simplicity, security, and innovation possible in the blockchain space.</p>
        <button 
            onClick={() => window.open("https://sign-in-b4xz.vercel.app/", "_blank")}
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
        <hr className='mb-4' style={{color:"darkgreen"}}/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-1">
                  <img src="images/AIProjects/recipe.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-2">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700", color:"darkgreen"}}>A Healthy Recipe in no time!</h5>
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
        <hr className='mb-4' style={{color:"darkgreen"}}/>
        <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2">
                  <img src="images/AIProjects/pdf.PNG" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-1">
                <div className="card-body" style={{fontFamily:'Ubuntu',textAlign:"left", color:"white"}}>
                  <h5 className="card-title" style={{fontWeight:"700", color:"darkgreen"}}> PDF Loader project</h5>
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

export default BlockchainProjects
