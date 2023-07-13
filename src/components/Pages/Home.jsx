import React from 'react'
import OurCarousel from '../OurCarousel'
import Departments from '../Departments'

const Home = () => {
  return (
    <>
     <OurCarousel/> 
     <div className="container-fluid">
      <h3 className='text-center'>Departments</h3>
      <Departments/>
     </div>
    </>
  )
}

export default Home