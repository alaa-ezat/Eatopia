import React from "react";
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.jpg';
import reservations from '../../assets/reservations.jpg';
import './sections.css';

const Sections = () => {
  return (
    <div className="section">
      <div className="Card">
        <img src={menu} alt="Menu" className="Card.Img" />
        <Link to='/Menu'>
          <button>MENU</button>
        </Link>
      </div>
      <div className="Card">
        <img src={reservations} alt="Reservations" className="Card.Img" />
        <Link to='/Reservation'>
          <button>RESERVATIONS</button>
        </Link>
      </div>
    </div>
  );
}

export default Sections;
