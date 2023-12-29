import React from 'react'
import Layout from '../components/Layout/Layout'
import img from './img/hero.jpg'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()

  return (
    <Layout>
    <div className='' style={{marginTop:'8rem', padding:"1rem" }} >
<div className='row d-flex justify-content-center' style={{marginTop:''}}>
            <div className='col-md-5'>
          <h6>Welcome to </h6>
                 <h1> welcome to about us page </h1>
                <p>Lorem ipsum is placeholder text Commonly used in the graphic, print,Commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
           <button className='btn btn-primary' onClick={() => navigate('/products')}  style={{padding:"1.2rem 3rem"}}>
           Shop now</button>
            </div>
             <div className='col-md-4 mt-4'>                                                                                        
             <div className='img_box'>
               <img src={img} alt='hero' style={{width:'30rem'}}></img>
             </div>
             </div>
    
           </div>
          
               
        </div> 
    
  
    </Layout>
  )
}

export default About