"use client";
import React, { useState, useEffect } from 'react';
import defaultImage from "@/../public/image/default.png"
import Image from 'next/image';
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





const SkillsCardAnimationOne = () => {

  const [tokenDataMap, setTokenDataMap] = useState<{ [key: string]: { chain: string, name: string, website: string, ca: string, twitter: string, telegram: string, symbol: string, xData: {
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
  }, } }>({});
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

  const sliderTwo = tokenDataArray.map((item, index) => {
    const profileImage = item.xData?.profileImage; // Ensure xData and profileImage exist
    if (profileImage) {
      return {
        icon: <Image key={index} alt='image' src={profileImage} width={32} height={32} />
      };
    } else {
      return{
          icon: <Image key={index} alt='image' src={defaultImage} width={32} height={32} />
      }
    }
  }); // Filter out null values

  useEffect(() => {
    const sortedTokenDataMap = sortTokenDataMapByStatusesCount(
      tokenDataMap as { [key: string]: TokenDataMapEntry }
    );
    
    setTokenDataArray(Object.values(sortedTokenDataMap))
    console.log(tokenDataArray[0])
  }, [tokenDataMap]);

  return (
    <div className="card-style skills-card">
      <span className="heading-4 skills-card__title">Trending tokens in all chain via X</span>
      <div className="skills-card__slider-aria ">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
              {token.map((item, index) => (
                  <span style={{color: "#03cfb4", fontWeight: 'bolder'}} key={index} className="skills-card__slider-text">
                    ${item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="marquee-wrapper-icon-slider">
          <div className="marquee-inner to-right">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderTwo.map(({ icon }, index) => (
                  <span
                    key={`skill-slider-two${index}`}
                    className="skills-card__slider-two__box"
                  >
                    {icon}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SkillsCardAnimationOne;
