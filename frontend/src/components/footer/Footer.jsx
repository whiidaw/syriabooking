import { useState } from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [collapsedLists, setCollapsedLists] = useState([]);

  const toggleCollapse = (index) => {
    if (collapsedLists.includes(index)) {
      setCollapsedLists(collapsedLists.filter(i => i !== index));
    } else {
      setCollapsedLists([...collapsedLists, index]);
    }
  };

  const footerLists = [
    {
      title: "Destinations",
      items: ["Countries", "Regions", "Cities", "Districts", "Airports", "Hotels"]
    },
    {
      title: "Accommodations",
      items: ["Homes", "Apartments", "Resorts", "Villas", "Hostels", "Guest houses"]
    },
    {
      title: "Explore",
      items: ["Unique places to stay", "Reviews", "Travel articles", "Travel communities", "Seasonal deals"]
    },
    {
      title: "Services",
      items: ["Car rental", "Flight Finder", "Restaurant reservations", "Travel Agents"]
    },
    {
      title: "About Us",
      items: ["Customer Service", "Partner Help", "Careers", "Sustainability", "Press center", "Safety Resource Center", "Investor relations", "Terms & conditions"]
    }
  ];

  return (
    <div className="footer">
      <div className="fLists">
        {footerLists.map((list, index) => (
          <ul 
            key={index} 
            className={`fList ${collapsedLists.includes(index) ? 'collapsed' : ''}`}
            onClick={() => window.innerWidth <= 480 && toggleCollapse(index)}
          >
            <li className="fListTitle">{list.title}</li>
            {list.items.map((item, i) => (
              <li key={i} className="fListItem">{item}</li>
            ))}
          </ul>
        ))}
      </div>
      
      <div className="fSocial">
        <div className="fSocialIcon">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="fSocialIcon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="fSocialIcon">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="fSocialIcon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
      
      <div className="fText">Copyright © 2025 syriabooking. All rights reserved.</div>
    </div>
  );
};

export default Footer;