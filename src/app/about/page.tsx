import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a software development company that specializes in creating innovative solutions.</p>
      <h2>Our Mission</h2>
      <p>To deliver high-quality software that meets the needs of our clients.</p>
      <h2>Our Values</h2>
      <ul className="list-disc list-inside">
        <li>Quality</li>
        <li>Integrity</li>
        <li>Innovation</li>
      </ul>
    </div>
  );
};

export default About;