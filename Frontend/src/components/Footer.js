import React, { useEffect, useRef } from 'react';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
export const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-logo">
                <img src="./ImagenesChocolates/LogoChoconet.jpeg" alt="Logo de la empresa" style={{ width: '150px', height: '100px' }}/>
            </div>
            <div>
                <h3>Autores</h3>
                <ul>
                    <li><Link to='/erick'>Erick</Link></li>
                    <li><Link to='/santiago'>Santiago</Link></li>
                </ul>
            </div>
            <div className="footer-text">
                <p>Somos una empresa apasionada por crear chocolates exquisitos con ingredientes de la más alta calidad.</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/tu_cuenta_de_twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
        <p>&copy; 2023 Chocolates choconet | <a href="#">Términos y condiciones</a></p>
    </footer>
  )
} 
export default Footer