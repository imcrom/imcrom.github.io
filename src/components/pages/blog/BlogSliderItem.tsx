"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlogLink from "./BlogLink";
import default_img from "@/../public/image/default.png";

type Props = {
  token: string,
  chain: string,
  screener: string,
  ca: string
  name: string,
  symbol: string,
  website: string,
  telegram: string,
  twitter: string,
  buys24: number,
  xData: {
    id: number,
    userName: string,
    fullName: string,
    createdAt: string,
    description: string,
    isVerified: false,
    favouritesCount: number,
    followersCount: number,
    followingsCount: number,
    statusesCount: number,
    location: string,
    pinnedTweet: number,
    profileBanner: string,
    profileImage: string
  },
};

const BlogSliderItem = ({ xData, chain, name, token, telegram, twitter, website}: Props) => {
  const { profileImage } = xData ?? {};
  const { description } = xData ?? {};
  const { followersCount } = xData ?? {};
  const { statusesCount } = xData ?? {};
  const { favouritesCount } = xData ?? {};
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-style-two blog-slider"
    >
      <div className="image-container">
      <Image
        src={profileImage ?? default_img} // Use a default image URL if profileImage is undefined
        width={392}
        height={230}
        alt="Blog image"
        className="img-fluid"
      />{" "}
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__content-date">
        <h6 className="heading-4 list-blog-title">${token}</h6>
          <span className="textS font-thin articles-tag">{chain}</span>
        </div>
        <div className="blog-slider__content-title" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <p>Followers: <b>{followersCount}</b></p>
          <p>Statuses: <b>{statusesCount}</b></p>
          <p>Favorites: <b>{favouritesCount}</b></p>
        </div>
        <div className="blog-slider__content-title" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Link href={twitter}>
            <p className="list-blog-title"><b>Twitter</b></p>
        </Link>
        <Link href={telegram}>
            <p className="list-blog-title"><b>Telegram</b></p>
        </Link>
        <Link href={website}>
            <p className="list-blog-title"><b>Website</b></p>
        </Link>
        </div>
        
      </div>
    </motion.div>
  );
};

export default BlogSliderItem;
