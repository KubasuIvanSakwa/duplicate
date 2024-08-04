import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../../assets/BeautyLogo.svg';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 1,
      title: 'About Us',
      link: '/about',
    },
    {
      id: 2,
      title: 'Services',
      items: [
        { id: 0, title: 'Pedicure & Manicure', link: '/pedicure-manicure' },
        { id: 1, title: 'Nail Art', link: '/nail-art' },
        { id: 2, title: 'Nail Extension', link: '/nail-extension' },
        { id: 3, title: 'Massage', link: '/massage' },
        { id: 4, title: 'Microblading', link: '/microblading' },
      ],
    },
    {
      id: 3,
      title: 'Gallery',
      link: '/gallery',
     
    },
    {
      id: 4,
      title: 'Blog',
      link: '/blog',
    
    },
    {
      id: 5,
      title: 'Contact Us',
      link: '/contact',
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={LogoSVG} alt="Lynk Beauty Spa" className="logo " />
        </Link>
        <button className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navbarItems.map((item) => (
            <li key={item.id} className="nav-item">
              <div className="nav-link-container">
                <Link to={item.link} className="nav-links" onClick={toggleMenu}>{item.title}</Link>
                {item.items && (
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className="dropdown-icon" 
                  />
                )}
              </div>
              {item.items && (
                <ul className="dropdown-menu">
                  {item.items.map((link) => (
                    <li key={link.id}>
                      <Link to={link.link} className="dropdown-link" onClick={toggleMenu}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link to="https://wa.me/+254701636709" target='_blank' className="book-now-nav-btn">
          Whatsapp
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
