import React from 'react';

const Default_Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to the Default Page</h1>
      <p>This is the page that is displayed by default.</p>
      <button style={{ padding: '10px 20px', marginTop: '20px' }}>Click Me</button>
    </div>
  );
};

export default Default_Page;