import React, { useEffect } from 'react';
import '../css/Default_Page.css'; // Importing a CSS file


const Default_Page = (props) => {
  useEffect(() => {
    if (props.onLogout) {
      props.onLogout();
    }
  }, [props]);

  return (
    <div className="default-page">
      <section className="intro">
        <h1>Welcome to Our Website!</h1>
        <p>This is the default page. Please log in to access more features.</p>
      </section>
      <section className="about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="features">
        <h2>Features Explanation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="education">
        <h2>Education on Finance</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="contact">
        <h2>Contact Info</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="investors">
        <h2>Investors in the Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

export default Default_Page;