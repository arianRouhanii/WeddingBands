'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const backgroundImages = [
  '/bg_white.png',
  '/bg_radial.png',
  '/bg_3col.png',
  '/bg_black.png',
  '/bg_bone_2.png',
  '/bg_bone_1.png',
  '/bg_darkblue.png',
  '/bg_light_1.png',
  '/bg_pastel_blue.png',
  '/bg_pastel_bluewarm.png',
  '/bg_pastel_green.png',
  '/bg_pastel_lavender.png',
  '/bg_pastel_lilac.png',
  '/bg_pastel_rose.png',
  '/bg_pastel_yellow.png',
  '/bg_radial_lightblue.png',
  '/bg_linear_graywhite_1.png',
  '/bg_linear_graywhite_2.png',
  '/bg_linear_pinkwhite.png',
  '/bg_linear_turquoisewhite.png',
  '/bg_linear_antrasit.png',
  '/bg_linear_beige.png',
  '/bg_linear_gray.png',
  '/bg_linear_lightblue.png',
  '/bg_radial_antrasit.png',
  '/bg_radial_beige.png',
  '/bg_radial_aqua.png',
  '/bg_radial_black.png',
  '/bg_radial_blue.png',
  '/bg_radial_coral.png',
  '/bg_radial_darkblue.png',
  '/bg_radial_fuchsia.png',
  '/bg_radial_green.png',
  '/bg_radial_grey.png',
  '/bg_radial_red.png',
  '/bg_radial_white.png',
  '/bg_sky.png',
  '/bg_turquoise.png',
  '/bg_wine.png',
]
export default function TabBackground() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Background</p>
      <div className="flex flex-wrap justify-center gap-2">
        <div className="bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">=</div>
        <label htmlFor="add">
          <input type="file" id='add' accept='.png,.jpg,.svg' className='hidden' />
          <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
        </label>
        {backgroundImages.map((src, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
              }`}
          >
            <Image src={`/Backgrounds/PNG${src}`} width={1000} height={1000} alt={`back ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
