import './About.css';
import Team from '../homeskeleton/team/Team.jsx';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Lynk in Houz</h1>
        <p>Home / About</p>
      </div>
      <div className="about-content">
        <div className="about-description">
          <h2>About Us</h2>
          <p>
            Welcome to Beauty Lynks where beauty meets relaxation!
            We&apos;re more than just a nail salon—we&apos;re a haven for 
            those who appreciate the finer things in life, where
            every visit is an experience of pampering and perfection.
          </p>

          <p>
            Founded in 2019, Beauty Lynks was born from a passion 
            for beauty and self-care. Our mission is to provide a
            space where you can unwind, recharge, and leave looking 
            and feeling your best. We believe that your nails are a 
            reflection of your personality, and we&apos;re here to help 
            you express yourself with stunning, creative designs.
          </p>

          <p>
            At Beauty Lynks, we offer a full range of nail care services, 
            from classic manicures and pedicures to luxurious spa treatments.
            Our skilled technicians are experts in gel polish, nail art,
            and extensions, ensuring that every detail is perfect. We 
            also use high-quality, cruelty-free products to ensure 
            your nails are not only beautiful but healthy too
          </p>

          <p>
            Your comfort and satisfaction are our top priorities. 
            We maintain the highest standards of hygiene and use only 
            the best products to ensure your safety and well-being. We 
            also believe in creativity and personalization—no two clients
            are the same, and neither are their nails!
          </p>

          <p>
            Our team of highly trained nail artists is passionate about 
            their craft. Each technician brings a unique flair and attention 
            to detail, ensuring that your nails are in the best hands. 
            Whether you&apos;re looking for something classic or trendy, 
            we&apos;ve got you covered.
          </p>

          <p>
            here for a quick touch-up or a full day of pampering, you&apos;ll 
            leave with nails that are sure to turn heads. Book your 
            appointment today and treat yourself to the  Beauty Lynks
            experience!
          </p>
        </div>
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <Team/>
        </div>
      </div>
    </div>
  );
}
