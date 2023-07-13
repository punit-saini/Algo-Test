import React from 'react'
import dataSet from '../../../data/data1.json'
import Image from 'next/image';
import Link from 'next/link';
import { ChartComponent } from '../../../components/chart';


export default function phase1() {
    const formattedData = dataSet.map(([time, price, volume]) => ({
        time: new Date(time) /1000,
        value: price/1000,
      }));
  return (
    <div className='bg-my-blue min-h-screen '>
    <Link href={'/'}><Image className='absolute top-20 left-24 cursor-pointer' src={'/back.png'} height={96} width={96} /></Link>

          <Image src={'/img 2.png'} height={400} width={400} className='absolute right-12 top-4' />
          <Image src={'/img 1.png'} height={400} width={400} className='absolute bottom-0 left-12' />
        <div className='w-5/6 mx-auto py-24'>
             
        <h1 className=' font-serif text-5xl mb-24 text-center italic text-my-pink'>Phase 1 </h1>
          
          <ChartComponent data={formattedData} />

        </div>
        
    </div>
  )
}
