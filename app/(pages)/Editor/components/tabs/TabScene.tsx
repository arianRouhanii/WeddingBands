'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const sceneImages = [
  '/ss_001.png',
  '/ss_002.png',
  '/ss_003.png',
  '/ss_004.png',
  '/ss_005.png',
  '/ss_006.png',
  '/ss_007.png',
  '/ss_008.png',
  '/ss_009.png',
  '/ss_010.png',
  '/ss_011.png',
  '/ss_012.png',
  '/ss_013.png',
  '/ss_014.png',
  '/ss_015.png',
  '/ss_016.png',
  '/ss_017.png',
  '/ss_018.png',
  '/ss_019.png',
  '/ss_020.png',
  '/ss_021.png',
  '/ss_022.png',
  '/ss_023.png',
  '/ss_024.png',
  '/ss_025.png',
  '/ss_026.png',
  '/ss_027_a.png',
  '/ss_027_b.png',
  '/ss_027_c.png',
]
export default function TabScene() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Scene</p>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">=</div>
        <label htmlFor="add">
          <input type="file" id='add' accept='.vjson' className='hidden' />
          <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center cursor-pointer text-white text-4xl">+</div>
        </label>
        {sceneImages.map((src, idx) => (
          <div key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={` rounded-lg w-20 aspect-square flex justify-center overflow-hidden cursor-pointer border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
              }`}
          >
            <Image src={`/Scenes/PNG${src}`} width={1000} height={1000} alt={`scene ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
