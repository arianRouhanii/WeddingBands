'use client'
import Image from 'next/image'
import React, { useState } from 'react'
const environmentImages = [
  '/env_metal_001.png',
  '/env_metal_002.png',
  '/env_metal_003.png',
  '/env_metal_004_a.png',
  '/env_metal_004_b.png',
  '/env_metal_005.png',
  '/env_metal_006.png',
  '/env_metal_007.png',
  '/env_metal_008.png',
  '/env_metal_009.png',
  '/env_metal_010.png',
  '/env_metal_011.png',
  '/env_metal_012.png',
  '/env_metal_013.png',
  '/env_metal_014.png',
  '/env_metal_015.png',
  '/env_metal_016.png',
  '/env_metal_017.png',
  '/env_metal_018.png',
  '/env_metal_019.png',
  '/env_metal_020.png',
  '/env_metal_021.png',
  '/env_metal_022.png',
  '/env_metal_023.png',
  '/env_metal_024_a.png',
  '/env_metal_024_b.png',
  '/env_metal_025.png',
  '/env_metal_026.png',
  '/env_metal_027.png',
  '/env_metal_028.png',
  '/env_metal_029.png',
  '/env_metal_030.png',
  '/env_metal_031.png',
  '/env_metal_032.png',
  '/env_metal_033_a.png',
  '/env_metal_033_b.png',
  '/env_metal_034.png',
  '/env_metal_035.png',
  '/env_metal_036.png',
  '/env_metal_037.png',
  '/env_metal_038.png',
  '/env_metal_039.png',
  '/env_metal_040.png',
  '/env_metal_041.png',
  '/env_metal_042_a.png',
  '/env_metal_042_b.png',
  '/env_metal_043.png',
  '/env_metal_044_a.png',
  '/env_metal_044_b.png',
  '/env_metal_045.png',
  '/env_metal_046.png',
  '/env_metal_047.png',
  '/env_metal_048.png',
  '/env_metal_049.png',
  '/env_metal_050.png',
  '/env_metal_051.png',
  '/env_metal_052.png',
  '/env_metal_053.png',
  '/env_metal_054.png',
  '/env_metal_055.png',
  '/env_metal_056.png',
  '/env_metal_057.png',
  '/env_metal_058_a.png',
  '/env_metal_058_b.png',
  '/env_metal_059_a.png',
  '/env_metal_059_b.png',
  '/env_metal_060.png',
]

export default function TabEnvironment() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Environment</p>
      <div className="flex flex-wrap justify-center gap-2">
        <div className="bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">=</div>
        <label htmlFor="add">
          <input type="file" id='add' accept='.exr,.hdr' className='hidden' />
          <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
        </label>

        {environmentImages.map((src, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
              }`}
          >
            <Image src={`/Enviroment/PNG${src}`} width={1000} height={1000} alt={`Env ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
