import { useEffect, useState } from 'react';
import './style.slideshow.css';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';

const images = [
  { src: slide1, alt: 'slide1' },
  { src: slide2, alt: 'slide2' },
  { src: slide3, alt: 'slide3' },
  { src: slide4, alt: 'slide4' },
];

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
