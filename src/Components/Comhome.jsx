
import React from 'react'
import ParticlesComponent from './particles'
import Navbar from './Navbar'
import Home from './Home'
const Comhome = () => {
  return (
    <div>
      <Navbar/>

<ParticlesComponent id="particles" />
<Home/>
    </div>
  )
}

export default Comhome