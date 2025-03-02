import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name:'', email:'', message:'' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </section>
  );
};

export default Contact;
