'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CandleStickChartComponent } from '../../../components/CandleStickChart';

import dataSet from '../../../data/data1.json';
import dataSet2 from '../../../data/data2.json';
import dataSet3 from '../../../data/data3.json';

export default function Phase4() {
  const [chartData, setChartData] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([dataSet]);
  const [selectedResolution, setSelectedResolution] = useState(10);

  function combiner(selectedInstruments) {
    let combinedData = [];

    // Iterate over each instrument
    for (let i = 0; i < selectedInstruments.length; i++) {
      const instrumentData = selectedInstruments[i];

      // Combining the data from each instrument into the combinedData array
      combinedData = combinedData.concat(instrumentData);
    }

    // Sorting the combinedData array based on the time values
    combinedData.sort((a, b) => {
      const timeA = new Date(a[0]);
      const timeB = new Date(b[0]);
      return timeA - timeB;
    });

    return combinedData;
  }
  //  DataRec contain combined data that will be converted into OHLC
  const dataRec = combiner(selectedInstruments);

  useEffect(() => {
    const initialData = convertToOHLC(dataRec, selectedResolution);
    // setting updated combined OHLC data to chart data
    setChartData(initialData);
  }, [dataRec, selectedResolution]);

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
            open:open/1000,
            high:high/1000,
            low:low/1000,
            close:close/1000,
          };
          ohlcData.push(ohlcDataPoint);

          counter = 0;
        }

        currentMinute = currentDataMinute;
        open = value;
        high = value;
        low = value;
      }
    }

    if (currentMinute !== null) {
      close = formattedData[formattedData.length - 1][1];

      const ohlcDataPoint = {
        time: new Date(formattedData[formattedData.length - 1][0]) / 1000,
        open: open / 1000,
        high: high / 1000,
        low: low / 1000,
        close: close / 1000,
      };
      ohlcData.push(ohlcDataPoint);
    }

    return ohlcData;
  }

  function resolutionChange(interval) {
    setSelectedResolution(interval);
  }

  function handleInstrumentSelect(instrument) {
    setSelectedInstruments((prevInstruments) => {
      const isSelected = prevInstruments.includes(instrument);

      if (isSelected) {
        return prevInstruments.filter((item) => item !== instrument);
      } else {
        return [...prevInstruments, instrument];
      }
    });
  }
  const resStyle = 'bg-gray-700 text-gray-200  px-2 py-1 rounded curson-pointer mr-1'

  return (
    <div className="bg-my-blue min-h-screen">
      <a href={'/'}>
        <Image className="absolute top-20 left-24 cursor-pointer" src={'/back.png'} height={96} width={96} />
      </a>

      <Image src={'/img 7.png'} height={400} width={400} className="absolute right-12 top-4" />
      <Image src={'/img 6.png'} height={400} width={400} className="absolute bottom-0 left-12" />
      <div className="w-5/6 mx-auto py-24">
        <h1 className="font-serif text-5xl mb-24 text-center italic text-my-pink">Phase 4</h1>

        <div className="flex items-center gap-12 bg-[#22222230] p-4 rounded mb-4 w-fit">
          <div className="flex items-center">
            <p className="text-white mr-2">Resolutions (mins):</p>
            
            <span
              onClick={() => resolutionChange(10)}
              className= {`resolution-item ${
                selectedResolution === 10 ? resStyle : 'bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer mr-1'
              }`}
            >
              10
            </span>
            <span
              onClick={() => resolutionChange(15)}
              className= {`resolution-item ${
                selectedResolution === 15 ? resStyle : 'bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer mr-1'
              }`}
            >
              15
            </span>
            <span
              onClick={() => resolutionChange(30)}
              className= {`resolution-item ${
                selectedResolution === 30 ? resStyle : 'bg-gray-200 text-my-blue hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer mr-1'
              }`}
            >
              30
            </span>
          </div>

          <div className="text-white flex gap-4 items-center">
            <div>
              <input
                type="checkbox"
                id="instrument1"
                className="mr-2 w-4 h-4 rounded"
                checked={selectedInstruments.includes(dataSet)}
                onChange={() => handleInstrumentSelect(dataSet)}
              />
              <label htmlFor="instrument1">Instrument 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="instrument2"
                className="mr-2 w-4 h-4 rounded"
                checked={selectedInstruments.includes(dataSet2)}
                onChange={() => handleInstrumentSelect(dataSet2)}
              />
              <label htmlFor="instrument2">Instrument 2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="instrument3"
                className="mr-2 w-4 h-4 rounded"
                checked={selectedInstruments.includes(dataSet3)}
                onChange={() => handleInstrumentSelect(dataSet3)}
              />
              <label htmlFor="instrument3">Instrument 3</label>
            </div>
          </div>
        </div>

        <CandleStickChartComponent data={chartData} />
      </div>
    </div>
  );
}
