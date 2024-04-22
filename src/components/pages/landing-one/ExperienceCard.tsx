"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCardItem from "./ExperienceCardItem";

const ExperienceCard = () => {
  // State variables to hold current hour, minute, and second
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds());

  // Function to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
      setCurrentMinute(new Date().getMinutes());
      setCurrentSecond(new Date().getSeconds());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style experience-card"
    >
      <ExperienceCardItem
        counterNumber={currentHour}
        text="Hour"
        counterElement=""
      />
      <ExperienceCardItem
        counterNumber={currentMinute}
        text="Minute"
        counterElement=""
      />
      <ExperienceCardItem
        counterNumber={currentSecond}
        text="Second"
        counterElement=""
      />
    </motion.div>
  );
};

export default ExperienceCard;
