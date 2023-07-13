'use client';
import React, { useEffect, useState } from 'react';
import dataSet from '../../../data/data1.json';
import Image from 'next/image';
import Link from 'next/link';
import { CandleStickChartComponent } from '../../../components/CandleStickChart';

export default function Phase1() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Setting default resolution to 10
    const initialData = convertToOHLC(dataSet, 10);
    setChartData(initialData);
  }, []);


  // converts the data1.json file data into OHLC 
  function convertToOHLC(formattedData, interval) {
    let ohlcData = [];

    let open = null;
    let high = null;
    let low = null;
    let close = null;
    let currentMinute = null;
    let counter = 0;

    for (let i = 0; i < formattedData.length; i++) {
      const [time, value] = formattedData[i];
      const currentDataMinute = new Date(time).getMinutes();

      if (currentMinute === null) {
        currentMinute = currentDataMinute;
        open = value;
        high = value;
        low = value;
      } else if (currentDataMinute === currentMinute) {
        high = Math.max(high, value);
        low = Math.min(low, value);
      } else {
        counter++;
        if (counter === interval) {
          close = formattedData[i - 1][1];

          const ohlcDataPoint = {
            time: new Date(formattedData[i - 1][0]) / 1000,
            open : open/1000,
            high : high/1000,
            low : low/1000,
            close : close/1000
          };
          ohlcData.push(ohlcDataPoint);

          counter = 0;
        }

        currentMinute = currentDataMinute;
        open = value
        high = value
        low = value
      }
    }

    if (currentMinute !== null) {
      close = formattedData[formattedData.length - 1][1];

      const ohlcDataPoint = {
        time: new Date(formattedData[formattedData.length - 1][0]) / 1000,
        open:open/1000,
        high:high/1000,
        low:low/1000,
        close:close/1000,
      };
      ohlcData.push(ohlcDataPoint);
    }

    return ohlcData;
  }

  function resolutionChange(interval) {
    const updatedData = convertToOHLC(dataSet, interval);
    setChartData(updatedData);
  }

  return (
    <div className="bg-my-blue min-h-screen">
      <Link href={'/'}>
        <Image className="absolute top-20 left-24 cursor-pointer" src={'/back.png'} height={96} width={96} />
      </Link>

      <Image src={'/img 5.png'} height={400} width={400} className="absolute right-12 top-4" />
      <Image src={'/img 6.png'} height={400} width={400} className="absolute bottom-0 left-12" />
      <div className="w-5/6 mx-auto py-24">
        <h1 className="font-serif text-5xl mb-24 text-center italic text-my-pink">Phase 3</h1>

        <div className="flex items-center bg-gray-800 p-4 rounded mb-4 w-fit">
          <p className="text-white mr-2">Resolutions (mins) :</p>
          <span onClick={() => resolutionChange(10)} className="resolution-item bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer mr-1">
            10
          </span>
          <span onClick={() => resolutionChange(15)} className="resolution-item bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer mr-1">
            15
          </span>
          <span onClick={() => resolutionChange(30)} className="resolution-item bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
            30
          </span>
        </div>

        <CandleStickChartComponent data={chartData} />
      </div>
    </div>
  );
}
