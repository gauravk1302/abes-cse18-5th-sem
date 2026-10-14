
import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Contact Us</h1>

      <input
        type="text"
        placeholder="Enter your name"
        style={{ padding: '10px', margin: '5px' }}
      />

      <br />

      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: '10px', margin: '5px' }}
      />

      <br />

      <textarea
        placeholder="Enter your message"
        style={{ padding: '10px', margin: '5px' }}
      />

      <br />

      <button style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none'
      }}>
        Submit
      </button>
    </div>
  );
};

export default Contact;
