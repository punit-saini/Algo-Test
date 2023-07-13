'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChartComponent } from '../../../components/chart';

const currentDate = new Date();

// Initial Random Dataset 
const dataSet = [["2023-06-01T09:15:18", 75840.0, 1350],
["2023-06-01T09:15:21", 75480.0, 1925],
["2023-06-01T09:15:23", 75800.0, 1950],
["2023-06-01T09:15:26", 75800.0, 1950],
["2023-06-01T09:15:28", 76240.0, 2225],
["2023-06-01T09:15:31", 75885.0, 2250],
["2023-06-01T09:15:33", 76000.0, 2550],
["2023-06-01T09:15:36", 75900.0, 2625],
["2023-06-01T09:15:38", 75900.0, 2625],]

const formattedData = dataSet.map(([time, price, volume]) => ({
    time: new Date(time) /1000,
    value: price/1000,
  }));
  
export default function Phase1() {
  const [data, setData] = useState(formattedData);

  useEffect(() => {
    const simulateWebSocketConnection = setInterval(() => {
      const randomPrice = Math.floor(Math.random() * 100) + 1;
      // Incrementing time by 2 milliseconds
      const newTime = currentDate.getTime() + 2000; 
      currentDate.setTime(newTime);
      const update = { time: new Date(currentDate)/1000, value: randomPrice };
      processPriceUpdate(update);
    }, 2000);

    return () => clearInterval(simulateWebSocketConnection);
  }, []);

  const processPriceUpdate = (priceUpdate) => {
    setData((prevData) => [...prevData, priceUpdate]);
  };

  return (
    <div className='bg-my-blue min-h-screen'>
    <Link href={'/'}><Image className='absolute top-20 left-24 cursor-pointer' src={'/back.png'} height={96} width={96} /></Link>
      <Image src={'/img 3.png'} height={400} width={400} className='absolute right-12 top-4' />
      <Image src={'/img 4.png'} height={400} width={400} className='absolute bottom-0 left-12' />
      <div className='w-5/6 mx-auto py-24'>
        <h1 className='font-serif text-5xl mb-24 text-center italic text-my-pink'>Phase 2</h1>
        <ChartComponent data={data} />
      </div>
    </div>
  );
}

