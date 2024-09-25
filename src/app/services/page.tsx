import React from 'react';

const services = [
  { name: 'Web Development', description: 'Building responsive and scalable web applications.' },
  { name: 'Mobile Development', description: 'Creating mobile applications for iOS and Android.' },
  { name: 'UI/UX Design', description: 'Designing user-friendly and attractive interfaces.' },
];

const Services: React.FC = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.name} className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;