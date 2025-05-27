import React, { useEffect, useState } from 'react';
import './ParallaxText.css';

const ParallaxText = ({heading}) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <h1
        className="parallax-text"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
          backgroundPositionY: `${offsetY * 0.2}px`,
        }}
      >
        {heading}
      </h1>
    </div>
  );
};

export default ParallaxText;
