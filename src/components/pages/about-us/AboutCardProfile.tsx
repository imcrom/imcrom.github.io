"use client";
import imageShape from "@/../public/image/landing-two-profile-shapepng.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const AboutCardProfile = ({ image }: { image: StaticImageData }) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card card-profile-image"
    >
      <div className="card-profile-image__image-container">
        <Image
          src={image}
          width={260}
          height={260}
          alt="Landing bio image"
          className="profile-image"
        />
        <Image
          src={imageShape}
          width={272}
          height={272}
          alt="Image Shape"
          className="profile-shape"
        />
      </div>
    </motion.div>
  );
};

export default AboutCardProfile;
