import './ManiPedi.css';

const servicesData = [
  { title: 'Basic Mani and Pedi', price: 2000 },
  { title: 'Dip Powder Acrylic Manicure', price: 4000 },
  { title: 'Acrylic Manicure – Deluxe', price: 3500 },
  { title: 'Acrylic Manicure – Basic', price: 3500 },
  { title: 'Acrylic Overlay Manicure', price: 2500 },
  { title: 'Acrylic Manicure Refill', price: 2500 },
  { title: 'Gel Manicure', price: 1500 },
  { title: 'Gel Pedicure', price: 2000 },
  { title: 'Regular Polish Mani & Pedi', price: 2500 },
  { title: 'Regular Polish Pedicure', price: 1500 },
  { title: 'Stick on Manicure', price: 2500 },
  { title: 'Gel Removal', price: 200 },
  { title: 'Nail Art', price: 300 },
  { title: 'Acrylic Manicure Removal', price: 500 },
];

const ManiPedi = () => {
  return (
    <div className="mani-pedi">
      <div className="header">
        <h1 className="title">Our Mani Pedi Services</h1>
        <p className="subtitle">Your Lynk to Beauty and Beyond</p>
      </div>

      <div className="services">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-header">
              <span className="service-title">{service.title}</span>
              <span className="service-price">
                <span className="price-bg">Ksh {service.price.toLocaleString()}</span>
              </span>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManiPedi;
