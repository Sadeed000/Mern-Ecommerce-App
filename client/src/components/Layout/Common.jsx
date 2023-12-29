import React from 'react'
import img from './img/hero.jpg'
import img2 from './img/hero1.jpg'
import Button from '@mui/material/Button';
import img3 from './img/cloth2.webp'
import { useNavigate } from 'react-router-dom'
import './common.css'
const Common = (props) => {
  const navigate = useNavigate()

  return(
    <>

<div className='container-fluid'>
    <div className='row'>
   <div className='col-12' >

     <div id="carouselExampleCaptions" className="carousel slide carousel-fade carousel-dark slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  >
    <div className="carousel-item active" >
      <img src={img} className="d-block w-100" alt={img} />
      <div className="carousel-caption d-md-block mt-3">
      <h1> {props.text}</h1>
                <p>text Commonly used in the gra, print, and publishing industries for previewing layouts and visual mockups.</p>
           <button className='btn btn-success' onClick={() => navigate('/products')}  style={{padding:"1rem 3rem"}}>
           Shop now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
    </div>
   </div>
    </>
  )
}
export default Common

