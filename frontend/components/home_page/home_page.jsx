import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => (
  <div>
    <header>
      <nav>
        <section className="right-nav">
          <Link to="/">
            <img src="#" alt="in-logo" />
          </Link>
        </section>
        <section className="left-nav">
          <Link to="/signup" className="signup-nav">Join now</Link>
          <Link to="/login" className="login-nav">Sign In</Link>
        </section>
      </nav>
    </header>
    <section className="home-page">
      <h1>Welcome to your professional community</h1>
    </section>
  </div>
)

export default HomePage;
