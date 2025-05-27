import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ active }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (active) {
      window.addEventListener('mousemove', moveCursor);
    } else {
      setPosition({ x: -9999, y: -9999 }); // sakrij kad nije aktivan
      window.removeEventListener('mousemove', moveCursor);
    }

    return () => window.removeEventListener('mousemove', moveCursor);
  }, [active]);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: active ? 1 : 0,
      }}
    >
      ПРЕГЛЕДАЈ
    </div>
  );
};

export default CustomCursor;
