import { createChart, PriceScaleMode } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const CandleStickChartComponent = ({data}) => {

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#08143830' },
					textColor: '#DDD',
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();
    chart.applyOptions({
      priceScale: {
        mode: PriceScaleMode.Normal,
      },
    });
    chart.timeScale().applyOptions({
        timeVisible: true,
        secondsVisible: true,
      });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};
