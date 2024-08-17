import './MicroBlading.css'
import microbladingvid from '../../src/assets/microbladingvid.mp4'
import Services from './Services';

const MicroBlading = () => {
  const services = [
    {
      name: "Ombre",
      price: "15,000",
      description: "Subtle shading technique for a soft, natural look.",
      'video': ''
    },
    {
      name: "Combo",
      price: "20,000",
      description: "Combination of microblading and shading for fuller brows.",
      'video': ''
    },

    {
      name: "Microblading",
      price: "15,000",
      description: "Precise hair-like strokes for a natural, fuller appearance.",
      'video': `${microbladingvid}`
    }
  ];

  return (
    <div className="microblading">
      <div className="breadcrumb">
        <p>Home / Microblading</p>
      </div>
      <h2 className="microblading-title">Microblading Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <Services key={index} name={service.name} price={service.price} description={service.description} video={service.video}/>
        ))}
      </div>
    </div>
  );
};

export default MicroBlading;
