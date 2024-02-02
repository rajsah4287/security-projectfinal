import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img7 from "../img/delhi.jpg";
import img2 from "../img/goa.jpg";
import img4 from "../img/jaipur.jpg";
import img5 from "../img/kerala.jpg";
import img6 from "../img/madurai.jpg";
import img8 from "../img/ooty.jpg";
import img3 from "../img/taj.jpg";
import img1 from "../img/travel.jpg";





function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
      <img src={img1} alt="travel.jpg"/>
        <Carousel.Caption>
          <h3>Media Solutions</h3>
          <p className='homeimg-content'>"Capture the magic of your life's journey with our happy photography expedition."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img2} alt="goa.jpg"/>
        <Carousel.Caption>
          <h3>Mehndi</h3>
          <p className='homeimg-content'>"We will capture moments for your Mehndi."</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img3} alt="taj.jpg"/>
        <Carousel.Caption>
          <h3>Celibrity Events</h3>
          <p className='homeimg-content'>
            "Embarking on a journey to seize timeless memories at the grandeur of a Celebrity Event."
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img4} alt="jaipur.jpg"/>
        <Carousel.Caption>
          <h3>Weeding</h3>
          <p className='homeimg-content'>
        "Embarking on a voyage to immortalize your union in the tapestry of love at your wedding celebration."
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img5} alt="kerala.jpg"/>
        <Carousel.Caption>
          <h3>Events</h3>
          <p className='homeimg-content'>
          "Pioneering the art of seizing moments, we curate cherished memories for your events."
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img6} alt="madurai.jpg"/>
        <Carousel.Caption>
          <h3>Photoshots</h3>
          <p className='homeimg-content'>
          "Empowering your moments, we stand ready to weave magic through our lens at your photoshoot."
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img7} alt="delhi.jpg"/>
        <Carousel.Caption>
          <h3>Engagements</h3>
          <p className='homeimg-content'>
          "Capturing the essence of engagements, we freeze fleeting moments into cherished memories."
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img8} alt="ooty.jpg"/>
        <Carousel.Caption>
          <h3>Festive</h3>
          <p className='homeimg-content'>
          "Unleashing the magic of our lens, we preserve the joy and spirit of your festive celebrations."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;