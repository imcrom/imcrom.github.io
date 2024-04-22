"use client";
import blogBig from "@/../public/image/big-blog.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BlogLink from "./BlogLink";
import React, { useState, useEffect } from 'react';
import { stat } from "fs";


interface TokenData {
  
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
  
}

interface TokenDataMap {
  [key: string]: {
    chain: string;
    name: string;
    website: string;
    ca: string;
    twitter: string;
    telegram: string;
    symbol: string;
  };
}

interface TokenDataMapEntry {
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
  
}


const BlogBig = () => {
  const [tokenDataMap, setTokenDataMap] = useState<{ [key: string]: { chain: string, name: string, website: string, ca: string, twitter: string, telegram: string, symbol: string} }>({});
  const [token, setToken] = useState<string[]>([]);
  const [tokenDataArray, setTokenDataArray] = useState<TokenData[]>([]);


  const sortTokenDataMapByStatusesCount = (tokenDataMap: { [key: string]: TokenData }) => {
    // Convert tokenDataMap to an array of [token, tokenData] pairs
    const tokenDataArray = Object.entries(tokenDataMap);
  
    // Sort the array based on the statusesCount property in xData object
    tokenDataArray.sort(([, dataA], [, dataB]) => {
      const statusesCountA = dataA.xData?.statusesCount || 0; // Default to 0 if statusesCount is undefined
      const statusesCountB = dataB.xData?.statusesCount || 0; // Default to 0 if statusesCount is undefined
      return statusesCountB - statusesCountA; // Sort in descending order by statuses count
    });
  
    // Convert the sorted array back to an object
    const sortedTokenDataMap: { [key: string]: TokenData } = {};
    tokenDataArray.forEach(([token, data]) => {
      sortedTokenDataMap[token] = data;
    });
  
    return sortedTokenDataMap;
  };

  useEffect(() => {
    async function fetchJSON(url: string) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: TokenData[] = await response.json();
        const tokenDataMap = data.reduce((acc: TokenDataMap, item) => {
          acc[item.token] = item;
          return acc; // Explicitly return the accumulator
        }, {});
        
        setTokenDataMap(tokenDataMap);
        const tokens = data.map(item => item.token);
        setToken(tokens);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }

    const jsonUrl = 'https://cruiserscoin.org/finaltoken.json';
    fetchJSON(jsonUrl);
  }, []);

  useEffect(() => {
    const sortedTokenDataMap = sortTokenDataMapByStatusesCount(
      tokenDataMap as { [key: string]: TokenDataMapEntry }
    );
    
    setTokenDataArray(Object.values(sortedTokenDataMap))
    console.log(tokenDataArray[0])
  }, [tokenDataMap]);

  const profileImage = tokenDataArray.length > 0 ? tokenDataArray[0].xData?.profileImage : '';
  const description = tokenDataArray.length > 0 ? tokenDataArray[0].xData?.description : '';
  const twitter = tokenDataArray.length > 0 ? tokenDataArray[0].twitter : '';
  const telegram = tokenDataArray.length > 0 ? tokenDataArray[0].telegram : '';
  const website = tokenDataArray.length > 0 ? tokenDataArray[0].website : '';
  const name = tokenDataArray.length > 0 ? tokenDataArray[0].token : '';
  const chain = tokenDataArray.length > 0 ? tokenDataArray[0].chain : '';
  const followers = tokenDataArray.length > 0 ? tokenDataArray[0].xData?.followersCount : '';
  const favorites = tokenDataArray.length > 0 ? tokenDataArray[0].xData?.favouritesCount : '';
  const statuses = tokenDataArray.length > 0 ? tokenDataArray[0].xData?.statusesCount : '';
  const symbol = tokenDataArray.length > 0 ? tokenDataArray[0].symbol : '';
  
  return (
    <div className=" blog-body__up-left">
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-style-two big-blog-padding"
      >
        <div className="image-container">
          <Image
            src={profileImage}
            width={596}
            height={554}
            alt="Blog image"
            className="img-fluid"
          />{" "}
        </div>
        <div className="up-left__content">
          <div className="up-left__content-date">
          <h3 className="heading-3 font-semi-bold blog-title">
              ${symbol}
              </h3>
            <span className="textL font-thin articles-tag">{chain}</span>
          </div>
          <div className="up-left__content-title">
            
            <p className="textL font-thin">
              {description}
            </p>
          </div>
          <div className="blog-slider__content-title" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <p>Followers: <b>{followers}</b></p>
          <p>Statuses: <b>{statuses}</b></p>
          <p>Favorites: <b>{favorites}</b></p>
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
    </div>
  );
};

export default BlogBig;
