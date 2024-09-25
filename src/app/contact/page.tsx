import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="flex flex-col">
        <label htmlFor="name" className="mb-2">Name:</label>
        <input type="text" id="name" className="p-2 border border-gray-300 rounded mb-4" />
        
        <label htmlFor="email" className="mb-2">Email:</label>
        <input type="email" id="email" className="p-2 border border-gray-300 rounded mb-4" />
        
        <label htmlFor="message" className="mb-2">Message:</label>
        <textarea id="message" className="p-2 border border-gray-300 rounded mb-4" rows={4}></textarea>
        
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;