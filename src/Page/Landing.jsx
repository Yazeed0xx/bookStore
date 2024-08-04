import React from 'react'
import { Link } from 'react-router-dom'
import Read from '../assets/read.jpg'
import Nav from './Nav'

function Landing() {
  return (
    <>

<div className="flex wrap">
    <div
  className="hero bg-opacity-20 bg-[url('./assets/1212.jpeg')] w-1/2   min-h-screen"
  >
    
</div>
<div className="flex card  bg-base-300 w-[1050px] shadow-7xl ">
    <div className="card card-body ">
        <p className='text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea totam distinctio, voluptatum itaque est fugiat ex! Nisi, vitae necessitatibus pariatur temporibus aperiam ex hic architecto sed, dolorum aspernatur voluptates recusandae.</p>
        <Link to='/home'>
        <button className='btn'>Get started</button>

        
        </Link>

        
    </div>
    
</div>
</div>
    
    </>
  )
}

export default Landing
