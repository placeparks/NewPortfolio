import React from 'react'
import AI from './AIProjects/AIProject'
import BlockchainProjects from './BlockchainProjects/BlockchainProjects'
import MernProjects from './MERNStack/MernProjects'
import PWAProjects from './PWAProjects/PWAProjects'
import Websites from './Websites/Websites'


function Portfolio() {
  return (
    <div className='container'>
      <h1 style={{color:"#63B3ED"}}>Portfolio</h1>
    <h6 style={{color:"white", paddingBottom:"4%"}}>Discover a Gallery of Innovations. Dive into my Projects Page to explore a curated collection of my creations – a fusion of creativity and technology that embodies my passion for pushing boundaries and solving challenges. Each project is a testament to my dedication to crafting meaningful solutions and pushing the envelope of what's possible</h6>
<AI/>
<BlockchainProjects/>
<MernProjects/>
<PWAProjects/>
<Websites/>
    </div>
  )
}

export default Portfolio
