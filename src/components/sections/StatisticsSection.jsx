import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, duration, label }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--accent)', fontFamily: 'Outfit' }}>
        {count}+
      </div>
      <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {label}
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="container" style={{ padding: '80px 24px', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '40px' }}>
        <Counter from={0} to={2} duration={1.5} label="Projects Completed" />
        <Counter from={0} to={15} duration={2} label="Technologies & Tools" />
        <Counter from={0} to={4} duration={1.5} label="Core Interests" />
      </div>
    </section>
  );
};

export default StatisticsSection;
