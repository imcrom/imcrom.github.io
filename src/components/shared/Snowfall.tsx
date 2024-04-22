"use client";
import React, { useEffect, useState } from "react";

interface SnowflakeProps {
  left: string;
  top: string;
  animationDuration: string;
  rotation: string;
  opacity: number;
  shape: string;
  color: string;
}

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getThemeColor = () => {
  const themeColors = ["#03cfb4", "#ffffff", "#005B41"];
  return themeColors[Math.floor(Math.random() * themeColors.length)];
};

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([]);

  useEffect(() => {
    const generateSnowflake = (): SnowflakeProps => {
      return {
        left: `${getRandomNumber(0, 100)}%`,
        top: `${getRandomNumber(-5, 0)}%`,
        animationDuration: `${getRandomNumber(5, 20)}s`,
        rotation: `${getRandomNumber(0, 100)}deg`,
        opacity: getRandomNumber(0.4, 0.6),
        shape: getRandomShape(),
        color: getThemeColor(),
      };
    };

    const newSnowflakes = Array.from({ length: 600 }, (_, index) =>
      generateSnowflake()
    );
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((snowflake, index) => (
        <div
          key={index}
          className={`snowflake ${snowflake.shape}`}
          style={{
            ...snowflake,
            animationDelay: `${getRandomNumber(0, 0)}s`,
            backgroundColor: snowflake.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Snowfall;
