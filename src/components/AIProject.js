import React from 'react'
import LottieLoader from 'react-lottie-loader'
import AI from '../assets/aibot.json'
function AIProjects() {
  return (
    <div style={{fontFamily:"Phudu", display:"flex", flexDirection:"row"}}>
      <LottieLoader animationData={AI} style={{height:"200px"}} />
      <h1 style={{color:"#FF6EC7", marginTop:"2%"}}>AI Wonders</h1>
    </div>
  )
}

export default AIProjects
