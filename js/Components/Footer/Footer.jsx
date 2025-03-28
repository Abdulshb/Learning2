import React from 'react'
import './Footer.css'
import footerlogo from '../Assets/logo.PNG'
import facebookicon from '../Assets/facebook-logo.webp'
import tiktokicon from '../Assets/tiktok-logo.webp'
import instaicon from '../Assets/Instagram_icon.png'
import pintesticon from '../Assets/pinterest-logo.webp'
import whatsappicon from '../Assets/whatsapp-icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerlogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={facebookicon} alt="" />
              </div>
              
                <div className="footer-icons-container">
                <img src={tiktokicon} alt="" />
                </div>
                <div className="footer-icons-container">
                <img src={instaicon} alt="" />
                </div>
                <div className="footer-icons-container">
                <img src={pintesticon} alt="" />
                </div>
                <div className="footer-icons-container">
                <img src={whatsappicon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p> Copyright @2025 - All Reserved.</p>
            </div>
        </div>
  )
}
