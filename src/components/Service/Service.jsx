import React from 'react';
import './Service.css'; // Ensure this CSS file exists and is imported

function Service() {
  const services = [
    {
      icon: '🌍',
      title: 'Custom Tour Packages',
      desc: 'Personalized trips for families, honeymooners, solo travelers, and corporate groups.',
    },
    {
      icon: '🚌',
      title: 'Transportation Services',
      desc: 'Private cabs, AC coaches, and airport transfers.',
    },
    {
      icon: '🏨',
      title: 'Hotel Bookings',
      desc: 'Handpicked stays across destinations at competitive prices.',
    },
    {
      icon: '🎫',
      title: 'Flight & Train Tickets',
      desc: 'Hassle-free reservations with real-time tracking.',
    },
    {
      icon: '🛂',
      title: 'Visa Assistance',
      desc: 'End-to-end support for all your visa needs (international travel).',
    },
    {
      icon: '📸',
      title: 'Local Guide Services',
      desc: 'Experienced guides to enrich your travel experience.',
    },
  ];

  return (
    <div className="service-section">
      <h1>Our Services</h1>
      <p className="intro-text">
        We offer a wide range of travel solutions to make your journey stress-free and memorable:
      </p>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <p className="outro-text">Let us take care of everything — you just pack your bags!</p>
    </div>
  );
}

export default Service;
