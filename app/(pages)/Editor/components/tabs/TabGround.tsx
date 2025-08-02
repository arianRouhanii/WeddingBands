'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const groundsImages = [
  '/backleft.png',
  '/backright.png',
  '/frontleft.png',
  '/frontright.png',
  '/reflection.png',
  '/top_1.png',
  '/top_2.png',
  '/soft_backleft.png',
  '/soft_backright.png',
  '/soft_frontleft.png',
  '/soft_frontright.png',
  '/ssr_reflection.png',
]
export default function TabGround() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Ground</p>
      <div className="flex flex-wrap justify-center gap-3">
        <label htmlFor="add">
          <input type="file" id='add' accept='.json' className='hidden' />
          <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center cursor-pointer text-white text-4xl">+</div>
        </label>
        {groundsImages.map((src, idx) => (
          <div key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={` rounded-lg w-20 aspect-square flex justify-center cursor-pointer overflow-hidden border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
              }`}
          >
            <Image src={`/Grounds/PNG${src}`} width={1000} height={1000} alt={`ground ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
