"use client";
import blogList1 from "@/../public/image/list-blog-1.png";

import BlogBig from "./BlogBig";
import BlogList from "./BlogList";
import BlogSlider from "./BlogSlider";
import React, { useState, useEffect } from 'react';



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
  
const BlogBody = () => {
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


  useEffect(() => {
    const sortedTokenDataMap = sortTokenDataMapByStatusesCount(
      tokenDataMap as { [key: string]: TokenDataMapEntry }
    );
    
    setTokenDataArray(Object.values(sortedTokenDataMap))
    console.log(tokenDataArray[0])
  }, [tokenDataMap]);


  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2 ">
      <div className="blog-body">
        <div className="blog-body__up">
          <BlogBig />
          <div className=" blog-body__up-right">
          {tokenDataArray.slice(1, 4).map(( item, index ) => (
              <BlogList key={item.ca}
                {...item}
              />
            ))}
          </div>
        </div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default BlogBody;
