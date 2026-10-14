
import React from 'react';

const Home = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f2f2f2'
    }}>
      <h1>Welcome to My App</h1>
      <p>This is our Home Page.</p>
      <button style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }}>
        Explore Now
      </button>
    </div>
  );
};

export default Home;
