import{ useState } from 'react';
import './ManiPedi.css';
import { Link } from 'react-router-dom';

const servicesData = [
  { title: 'Basic Mani and Pedi', price: 2000, duration: '60 mins', description: 'Basic nail care of the hands and feet + hand massage + foot massage. This is a package but you can choose to skip the hands/feet.' },
  { title: 'Dip Powder Acrylic Manicure', price: 4000, duration: '90 mins', description: 'Basic nail care + nail enhancement (gluing/sculpting of the tips to extend your nails) + overlaying (dip powder acrylic application) + designing the nail art + top coating (regular or gel polish) + hand massage. Choose this treatment for a long-lasting manicure.' },
  { title: 'Acrylic Manicure – Deluxe', price: 3500, duration: '90 mins', description: 'Basic nail care + nail enhancement (gluing/sculpting of the tips to extend your nails) + overalying (application of the dip gel acrylic on enhanced nail) + designing of nail art + top coating (regular or gel polish) + hand massage. Choose this treatment for quality & long-lasting nails without blasting your budget.' },
  { title: 'Acrylic Manicure – Basic', price: 3500, duration: '60 mins', description: 'Basic nail care + nail enhancement (gluing/sculpting of the tips to extend your nails) + overlaying (application of the dip gel on the enhanced nails) + top coating (regular or gel polish) + hand massage.' },
  { title: 'Acrylic Overlay Manicure', price: 2500, duration: '60 mins', description: 'Basic nail care + overlaying (application of dip gel on natural nails) + top coating (regular or gel polish) + hand massage. Choose this treatment to make long nails stronger or to grow out short nails.' },
  { title: 'Acrylic Manicure Refill', price: 2500, duration: '60 mins', description: 'Basic nail care + A refill of your acrylic with dip gel + regular or gel polish top coat + hand massage.' },
  { title: 'Gel Manicure', price: 1500, duration: '45 mins', description: 'Basic nail care + application of gel polish + hand massage.' },
  { title: 'Gel Pedicure', price: 2000, duration: '60 mins', description: 'Basic nail care + application of gel polish + foot massage.' },
  { title: 'Regular Polish Mani & Pedi', price: 2500, duration: '60 mins', description: 'Basic nail care + application of nail regular polish on fingers and toes + hand and foot massage.' },
  { title: 'Regular Polish Pedicure', price: 1500, duration: '45 mins', description: 'Basic nail care + application of regular polish on the toes + foot massage.' },
  { title: 'Stick on Manicure', price: 2500, duration: '60 mins', description: 'Basic nail care + fitting of ready-to-wear nails on the fingers + regular or gel polish top coat + hand massage. Choose this treatment to make short nails appear longer while on a budget or for a short while during occasions.' },
  { title: 'Gel Removal', price: 200, duration: '30 mins', description: 'The removal of your gel or regular polish. This service needs to be coupled with another.' },
  { title: 'Nail Art', price: 300, duration: '30 mins', description: 'Designing nails with cool art. This service needs to be coupled with another e.g acrylic overlay or gel manicure.' },
  { title: 'Acrylic Manicure Removal', price: 500, duration: '30 mins', description: 'The removal of acrylic nails. This service needs to be coupled with another.' },
];

const ServiceItem = ({ title, price, duration, description}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="service-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-name-price">
        <span className="service-name">{title}</span>
        <span className="service-price">Ksh {price.toLocaleString()}</span>
      </div>
      <p className="service-duration">Service length: {duration}</p>
      {isHovered && <p className="service-description">{description}</p>}
      <Link 
        className='mani-btn'
        to={`https://wa.me/+254701636709?text=Inquiring about ${title} for ksh ${price}`}
        target='_blank'
      >
        Book Apointment
      </Link>
    </div>
  );
};

const ManiPedi = () => {
  return (
    <div className="mani-pedi-container">
      <h1 className="page-title">Our Mani & Pedi Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ManiPedi;