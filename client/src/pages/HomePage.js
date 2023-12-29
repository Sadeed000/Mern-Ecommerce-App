import React from 'react'


import Header from '../components/Layout/Header'
import Common from '../components/Layout/Common'
import Layout from '../components/Layout/Layout'
import Categories from './Categories'

const Home = () => {
  return (
    <Layout >
    <Header />


      <Common  
        text= 'Home Page'
      />
            <Categories />
  <div className=' deliviery_services p-5 mt-5  '>
       <div className='row ' >
        <div className='col-md-3 box1'>
        <i className="fa-solid fa-truck"></i>
          <h2>super and free delivery</h2>
        </div>
        
        <div className='col-md-3 box1 '>
        <i className="fa-solid fa-shield-halved"></i>
          <h2>non blocking shipping</h2>
        </div>

        <div className='col-md-3 box1'>
        <i className="fa-solid fa-money-check-dollar"></i>
              <h2>money back guranted</h2>
        </div>

        <div className='col-md-3 box1'>
        <i className="fa-solid fa-lock"></i>
    <h2>super secure payment  </h2>
        </div>
        </div>
     </div>



    </Layout>
    
  )
}

export default Home