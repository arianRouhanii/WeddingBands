'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const modelImages = [
  '/cube_blue.png',
  '/snow_globe.png',
  '/sphere_blue.png',
  '/box_beige.png',
  '/box_black.png',
  '/box_blue.png',
  '/box_red.png',
  '/box_turquoise.png',
  '/cactus_blue.png',
  '/cactus_green.png',
  '/column_marble.png',
  '/cone_blue_horizontal.png',
  '/cone_blue_vertical.png',
  '/cone_green_horizontal.png',
  '/cone_green_vertical.png',
  '/cone_pink_horizontal.png',
  '/cone_pink_vertical.png',
  '/cone_red_horizontal.png',
  '/cone_red_vertical.png',
  '/cone_turquoise_horizontal.png',
  '/cone_turquoise_vertical.png',
  '/cube_green.png',
  '/cube_pink.png',
  '/cube_red.png',
  '/cube_turquoise.png',
  '/cube_white.png',
  '/desert_rocks.png',
  '/leaf.png',
  '/letter_love.png',
  '/podium_arch_turquoise.png',
  '/podium_arch_mesh.png',
  '/podium_arches.png',
  '/podium_cactus.png',
  '/podium_clouds.png',
  '/podium_cylinder.png',
  '/podium_desert_rocks.png',
  '/podium_gate_blue.png',
  '/podium_gate_pink.png',
  '/podium_gate_turquoise.png',
  '/podium_geometrys.png',
  '/podium_gifts.png',
  '/podium_heart.png',
  '/podium_neon.png',
  '/podium_plant_arches.png',
  '/podium_gate_blue.png',
  '/podium_portal_turquoise.png',
  '/podium_rock_palms.png',
  '/podium_roman_arc.png',
  '/roman_pilars.png',
  '/podium_roman_scene.png',
  '/podium_simple.png',
  '/snowman_christmas.png',
  '/ringbox_beige_vertical.png',
  '/ringbox_black_vertical.png',
  '/ringbox_blue_vertical.png',
  '/ringbox_red_vertical.png',
  '/ringbox_turquoise_vertical.png',
  '/showcase_stone_wall.png',
  '/showcase_wave_wall.png',
  '/sphere_green.png',
  '/sphere_pink.png',
  '/sphere_red.png',
  '/sphere_turquoise.png',
  '/sphere_white_horizontal.png',
  '/stone_wall.png',
  '/village_packshot.png',
]
export default function TabModelStage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Model Stage</p>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">=</div>
        <label htmlFor="add">
          <input type="file" id='add' accept='.glb' className='hidden' />
          <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center cursor-pointer text-white text-4xl">+</div>
        </label>
        {modelImages.map((src, idx) => (
          <div key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={` rounded-lg w-20 aspect-square flex justify-center cursor-pointer overflow-hidden border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
              }`}
          >
            <Image src={`/Models/PNG${src}`} width={1000} height={1000} alt={`model ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
