import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='section follow-us'>
          <h3>Follow Us</h3>
          <div className='icons'>
            <a href="https://www.facebook.com/profile.php?id=100071887879005&mibextid=ZbWKwL" target="_blank"><FontAwesomeIcon icon={faFacebook} className='footer__icon'/></a>
            <a href="https://www.instagram.com/nail_lynk?igsh=OTBobzZ6dGFsNndw" target="_blank"><FontAwesomeIcon icon={faInstagram} className='footer__icon' /></a>
            <a href="https://www.tiktok.com/@nail.lynk?_t=8oI4MD72PQM&_r=1" target="_blank"><FontAwesomeIcon icon={faTiktok} className='footer__icon'/></a>
          </div>
        </div>
        <div className='section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/"> Home</a></li>
            <li><a href="/about"> About</a></li>
            <li><a href="/services"> Services</a></li>
            <li><a href="/gallery"> Gallery</a></li>
            <li><a href="/blog"> Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='section'>
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faPhone} className='contact__icon'/>+254701636709</p>
          <p><FontAwesomeIcon icon={faEnvelope} className='contact__icon'/>beautylynkspa254@gmail.com</p>
          <p><FontAwesomeIcon icon={faLocationDot} className='contact__icon'/>00100,  Lyric house kimathi street</p>
        </div>
      </div>
      <hr className='footer__hr'/>
        <p>Copyright © {currentYear} All rights reserved Designed by <a href="https://api.whatsapp.com/send?phone=+254715137922" target="_blank">Mark Moses</a></p>
    </div>
  )
}
