"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from 'react';


import BlogSliderItem from "./BlogSliderItem";

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


const BlogSlider = () => {

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
  
  

  const [tokenDataArray, setTokenDataArray] = useState<TokenData[]>([]);
  const [tokenDataMap, setTokenDataMap] = useState<{ [key: string]: { chain: string, name: string, website: string, ca: string, twitter: string, telegram: string, symbol: string} }>({});
  const [token, setToken] = useState<string[]>([]);


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
  
  return (
    <div className="m-t-60px blog-body__down">
      <h3 className="heading-3">Other Trending Tokens</h3>
      
      {/* slider area */}
      <div className="m-t-40px">
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          speed={2500}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".customerSliderNext",
            prevEl: ".customerSliderPrev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 12,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 12,
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
        >
          {tokenDataArray.slice(4).map(({ ...props }, index) => (
            <SwiperSlide key={`blog-slider${index}`}>
              <BlogSliderItem {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
