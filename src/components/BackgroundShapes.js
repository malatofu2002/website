import React, { useState, useEffect } from 'react';
import './BackgroundShapes.css';

const colors = ['var(--clr-fg-alt)', 'var(--clr-primary)'];

const BackgroundShapes = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [showShapes, setShowShapes] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: document.documentElement.scrollHeight,
        width: window.innerWidth
      });
      setShowShapes(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateShapes = (count) => {
    const shapes = [];
    const spacing = dimensions.height / (count + 1);
    const minSize = 140;
    const sizeVariation = 40;
    const sideWidth = Math.min(400, dimensions.width * 0.2); // 20% of width or 400px, whichever is smaller

    for (let i = 0; i < count; i += 1) {
      const y = spacing * (i + 1) + (Math.random() - 0.5) * spacing * 0.5;
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const x = side === 'left'
        ? Math.random() * sideWidth
        : dimensions.width - Math.random() * sideWidth;
      const rotation = Math.random() * 360;
      const size = minSize + Math.random() * sizeVariation;
      const shapeType = Math.floor(Math.random() * 4);

      const key = `${side}-${i}`;
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      switch (shapeType) {
        case 0: // Equilateral triangle
          shapes.push(
            <polygon
              key={key}
              className="shape"
              transform={`rotate(${rotation.toFixed(2)}, ${x}, ${y})`}
              points={`${x},${y} ${x + size / 2},${y + size * 0.866} ${x - size / 2},${y + size * 0.866}`}
              stroke={randomColor}
            />
          );
          break;
        case 1: // Square
          shapes.push(
            <rect
              key={key}
              className="shape"
              transform={`rotate(${rotation.toFixed(2)}, ${x}, ${y})`}
              x={x - size / 2}
              y={y - size / 2}
              width={size}
              height={size}
              stroke={randomColor}
            />
          );
          break;
        case 2: { // Regular hexagon
          const hexPoints = [];
          for (let j = 0; j < 6; j += 1) {
            const angle = (Math.PI / 3) * j;
            const hx = x + size * 0.6 * Math.cos(angle);
            const hy = y + size * 0.6 * Math.sin(angle);
            hexPoints.push(`${hx.toFixed(2)},${hy.toFixed(2)}`);
          }
          shapes.push(
            <polygon
              key={key}
              className="shape"
              transform={`rotate(${rotation.toFixed(2)}, ${x}, ${y})`}
              points={hexPoints.join(' ')}
              stroke={randomColor}
            />
          );
          break;
        }
        case 3: // Circle
          shapes.push(
            <circle
              key={key}
              className="shape"
              cx={x}
              cy={y}
              r={size / 2}
              stroke={randomColor}
            />
          );
          break;
        default:
          break;
      }
    }

    return shapes;
  };

  return showShapes ? (
    <div className="background-shapes-container">
      <svg width="100%" height={dimensions.height} preserveAspectRatio="xMidYMid slice">
        {generateShapes(Math.ceil(dimensions.height / 150))}
      </svg>
    </div>
  ) : null;
};

export default BackgroundShapes;