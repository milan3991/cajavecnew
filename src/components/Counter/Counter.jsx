import React, { useEffect, useRef, useState } from "react";
import "./style.counter.css";

const currentYear = new Date().getFullYear();
const foundingYear = 1952;
const godinaPostojanja = currentYear - foundingYear;

const countersData = [
  { label: "ГОДИНА ПОСТОЈАЊА", target: godinaPostojanja },
  { label: "АКТИВНИХ ЧЛАНОВА", target: 500, suffix: "+" },
  { label: "ПРОЈЕКАТА", target: 25 },
  { label: "АНСАМБАЛА", target: 6 },
];

const Counter = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 3000;
    const increment = Math.ceil(target / (duration / 30));

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="counter-box">
      <div className="counter-number">
        {count}
        {suffix || ""}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="counter-section">
      {visible &&
        countersData.map((item, index) => (
          <Counter
            key={index}
            target={item.target}
            label={item.label}
            suffix={item.suffix}
          />
        ))}
    </div>
  );
};

export default CounterSection;
