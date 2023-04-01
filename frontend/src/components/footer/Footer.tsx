import React from 'react'
import img from '../../images/создание-интернет-магазина.png'
import './style.css'
const Footer = () => {
  return (
    <>
    <div className='footer__conatiner'>
      <div className='left__Side'>
        <h3>Download our App</h3>
         <p>Download our app for Andriod and IOS mobile phone</p>
         <img src={img} alt='ecom'/>
      </div>
      <div className='middle__Side'>
      <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; <span>Lusain</span></p>
      </div>
      <div className='right__Side'>
      <h4>Follow Us</h4>
        <a href="https://www.instagram.com/__hu__lusain/"><span>Instagram</span></a>
        <a href="http://youtube.com/"><span>Youtube</span></a>
        <a href="http://instagram.com/"><span>Facebook</span></a>
      </div>
    </div>
    <div className='text-container'>
    <span className='moving-text'>Mobile app is still is progress...</span>
  </div>
  </>
  )
}

export default Footer