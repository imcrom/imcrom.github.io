"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import default_img from "@/../public/image/default.png";
import Image from "next/image";
import axios from "axios";

interface geckoData {
  image: string,
  symbol: string,
  market_data:{
    current_price: {
      usd: number
    }
  }
}

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


const ChartAll = () => {
  const [tokenDataMap, setTokenDataMap] = useState<{ [key: string]: { chain: string, name: string, website: string, ca: string, twitter: string, telegram: string, symbol: string} }>({});
  const [token, setToken] = useState<string[]>([]);
  const [tokenDataArray, setTokenDataArray] = useState<TokenData[]>([]);
  const [geckoData, setGeckoData] = useState<geckoData[]>([]);

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
  }, [tokenDataMap]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = tokenDataArray.map(async (token) => {
          const response = await axios.get(`https://api.coingecko.com/api/v3/${token.symbol}`);
          return response.data;
        });

        const tokenResults = await Promise.all(requests);
        setGeckoData(tokenResults);
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    fetchData();
  }, [tokenDataArray]); // Watch changes in tokens array
  

  useEffect(() => {
    console.log(geckoData)
  
   
  }, [geckoData])
  
  
  return (
    <div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-style-chart"
      >
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <table style={{ width: '100%', tableLayout: 'fixed' }}>
          <div style={{marginTop: '12px'}}></div>

            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Volume 24h</th>
                <th>Buys 24h</th>
                <th>Chart</th>
              </tr>
            </thead>
            <div style={{marginTop: '12px'}}></div>
            <tbody>
            {tokenDataArray.map((data, index) => (
              <tr key={index}>
                <td style={{paddingBottom: '14px'}}> <Image style={{marginRight: '12px'}} width={24} height={24} alt='logo' src={data.xData?.profileImage || default_img}></Image>{index + 1. + ')'} ${data.symbol.toUpperCase()}</td>
                <td style={{paddingBottom: '14px'}}>{}</td>
                <td style={{paddingBottom: '14px'}}>{}</td>
                <td style={{paddingBottom: '14px'}}></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
  
};

export default ChartAll;
