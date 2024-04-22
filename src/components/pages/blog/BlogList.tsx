"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlogLink from "./BlogLink";
import default_img from "@/../public/image/default.png"
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


const BlogList = ({ xData, chain, name, token, telegram, twitter, website}: Props) => {
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
      className="card-style-two blog-body__up-right-list"
    >
      <div className="image-container">
        <Image
          src={xData?.profileImage ?? default_img}
          width={250}
          height={250}
          alt="List blog one"
          className="img-fluid"
        />
      </div>
      <div className="list__content">
        <div className="list__content-date">
          <h3 className="text2 font-bold">${token}</h3>{" "}
          <span className="textS font-thin articles-tag">{chain}</span>
        </div>
        <div className="list__content-title">
            <h4 className="heading-4 font-medium list-blog-title">{name}</h4>
          
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5%"}}>
          <p className="font-thin">Followers: <b>{followersCount}</b></p>
          <p className="font-thin">Statuses: <b>{statusesCount}</b></p>
          <p className="font-thin">Favorites: <b>{favouritesCount}</b></p>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5%"}}>
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

export default BlogList;
