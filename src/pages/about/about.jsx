import React from 'react';
import './about.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
     
const about = () => {
  return (
    <div>
      <Navbar />
       
    
    <div className="about-us-container">
       
      <header className="about-header">
        <h1>About Syriabooking</h1>
        <p>Discover the story behind Syria's premier hotel booking platform</p>
      </header>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Syria Stays, we're dedicated to showcasing Syria's incredible hospitality and rich cultural heritage through 
            exceptional accommodation experiences. We bridge the gap between travelers and authentic Syrian hospitality, 
            making it easy to discover and book the perfect stay across this beautiful country.
          </p>
        </div>
       
      </section>

      
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🏛️</div>
            <h3>Cultural Preservation</h3>
            <p>
              We prioritize properties that maintain Syria's architectural heritage and traditional hospitality.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Community Impact</h3>
            <p>
              15% of our profits go to rebuilding Syria's cultural sites and supporting local artisans.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔍</div>
            <h3>Transparency</h3>
            <p>
              Honest reviews, clear pricing, and direct communication with property owners.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sustainable Tourism</h3>
            <p>
              We promote eco-friendly practices and responsible travel throughout Syria.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Explore Syria?</h2>
        <p>
          Discover amazing hotels, guesthouses, and unique stays across Syria's historic cities and landscapes.
        </p>
        <a href="/"><button className="cta-button">Browse Hotels</button></a>
        
      </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default about;