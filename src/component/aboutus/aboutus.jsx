import React from "react";
import './aboutus.css'
import { Carousel } from 'react-bootstrap';
import team from '../../assets/team.jpg'
import parista from '../../assets/parista.jpg'
import share from '../../assets/share.jpg'




const Aboutus = () =>{
    return(
        <div className="about-us">
            <div className="details">
            <h1>About Us</h1>
      <p>
        We are a passionate team of food enthusiasts dedicated to bringing you the best dining experience.
      </p>
      <p>
        Our restaurant has a rich history of serving delicious and diverse dishes that satisfy your taste buds.
      </p>
      <p>
        Come and join us to enjoy the perfect blend of flavors and the warmth of our hospitality.
      </p>
      <h2>Our History</h2>
      <p>
        Our restaurant was established in 1990, with a vision to offer a culinary journey through the most delightful dishes.
      </p>
      <p>
        Over the years, we've earned a reputation for our commitment to quality and exceptional service.
      </p>
      <h2>Our Team</h2>
      <p>
        Meet our dedicated team of chefs, servers, and staff who work tirelessly to ensure your dining experience is memorable.
      </p>
      <p>
        We take pride in our diverse culinary experts who bring authentic flavors from around the world to your plate.
      </p>
            </div>

            <Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={team}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={parista}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={share}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

    
        </div>
    )
} 
export default Aboutus