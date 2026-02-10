import { useEffect, useState, useRef } from 'react';

export const RadarChart = ({ skills }) => {
  const size = 400;
  const center = size / 2;
  const levels = 5;
  const maxValue = 100;
  const angleStep = (Math.PI * 2) / skills.length;

  const getPoint = (value, index, level = 1) => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (center - 80) * (value / maxValue) * level;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  const levelPaths = Array.from({ length: levels }, (_, i) => {
    const level = (i + 1) / levels;
    const points = skills.map((_, index) => getPoint(maxValue, index, level));
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  });

  const dataPoints = skills.map((skill, index) => getPoint(skill.value, index));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="radar-chart-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="radar-chart">
        {/* Grid levels */}
        {levelPaths.map((path, i) => (
          <path
            key={`level-${i}`}
            d={path}
            fill="none"
            stroke="rgba(0, 255, 65, 0.15)"
            strokeWidth="1"
          />
        ))}
        
        {/* Axis lines */}
        {skills.map((_, index) => {
          const point = getPoint(maxValue, index);
          return (
            <line
              key={`axis-${index}`}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="rgba(0, 255, 65, 0.2)"
              strokeWidth="1"
            />
          );
        })}
        
        {/* Data polygon */}
        <path
          d={dataPath}
          fill="rgba(0, 255, 65, 0.2)"
          stroke="#00ff41"
          strokeWidth="2"
          className="radar-data"
        />
        
        {/* Data points */}
        {dataPoints.map((point, index) => (
          <circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#00ff41"
            className="radar-point"
          />
        ))}
        
        {/* Labels */}
        {skills.map((skill, index) => {
          const labelPoint = getPoint(maxValue, index, 1.25);
          return (
            <text
              key={`label-${index}`}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#00ff41"
              fontSize="13"
              fontWeight="600"
              className="radar-label"
            >
              {skill.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};
