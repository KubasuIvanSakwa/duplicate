import { useSpring, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HomeImage from "../../assets/mark1.png";
import "./Home.css";

export default function Home() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const slideInFromLeft = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-50%)' }, delay: 400 });
  const slideInFromRight = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(50%)' }, delay: 600 });

  return (
    <>
      <Helmet>
        <title>Beauty Lynk Spa - Your Perfect Nail Solution in Nairobi</title>
        <meta name="description" content="Enjoy luxurious spa treatments in the comfort of your home or hotel in Nairobi. Book your perfect nail solution with Beauty Lynk Spa today!" />
        <meta name="keywords" content="spa, nail care, Nairobi, home service, beauty treatment" />
      </Helmet>
      <section className="home-section">
        <div className="home-container">
          <animated.div style={slideInFromLeft} className="home-content">
            <h3>Welcome to Beauty Lynk Spa</h3>
            <h1>Your Perfect Nail Solution</h1>
            <p>
              Enjoy a spa treatment in the comfort of your home or hotel in Nairobi or an adjacent town.
            </p>
            <div className="book-buttons">
              <Link to="/contact" className="book-now-btn" target="_blank" rel="noopener noreferrer">
                Book Online
              </Link>
              <a href="https://wa.me/+254701636709" className="book-now-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                Book via WhatsApp
              </a>
            </div>
          </animated.div>
          <animated.div style={slideInFromRight} className="home-image">
            <img src={HomeImage} alt="Beauty Lynk Spa services" />
          </animated.div>
        </div>
      </section>
    </>
  );
}