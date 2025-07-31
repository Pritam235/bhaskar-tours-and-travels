import React from 'react';
import './About.css';  // Optional, if you want extra styling

function About() {
  const backgroundStyle = {
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.eeTOjEUebVGJGAJRUJFkegHaDt?w=314&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '50px',
    minHeight: '100vh',
    color: 'white'
  };

  return (
    <div className="about-section" style={backgroundStyle}>
      <h1>About Bhaskar Tours & Travels</h1>
      <p className="intro">
        At Bhaskar Tours & Travels, we believe that travel is more than just visiting places — it's about creating unforgettable experiences.
        With years of expertise in planning both domestic and international trips, our mission is to make travel seamless, safe, and soulful.
      </p>

      <p className="middle">
        Whether you're seeking the tranquil backwaters of Kerala, the royal forts of Rajasthan, or vibrant international escapes,
        we tailor every itinerary to your dreams and budget.
      </p>

      <div className="why-choose">
        <h2>Why Choose Us:</h2>
        <ul>
          <li>✅ Expert-guided and customizable tours</li>
          <li>✅ Best-in-class accommodations and travel partners</li>
          <li>✅ 24/7 customer support</li>
          <li>✅ Transparent pricing, no hidden charges</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
