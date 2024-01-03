import React from 'react';
import data from '../../data';
import './menu.css'

const Menu = () => {
  return (
    <div className="Menu-page">  
    <div>
      <h1>Menu</h1>
      <div className="menu-items">
        {data.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.description} /> 
            <h3>{item.description}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

    


export default Menu;
