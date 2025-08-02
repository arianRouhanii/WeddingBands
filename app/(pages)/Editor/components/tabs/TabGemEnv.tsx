'use client'
import React,{useState} from 'react'
import Image from 'next/image'
const gemImages = [
  '/env_gem_001.png',
  '/env_gem_002.png',
  '/env_gem_003.png',
  '/env_gem_004.png',
  '/env_gem_005.png',
  '/env_gem_006.png',
  '/env_gem_007_a.png',
  '/env_gem_007_b.png',
  '/env_gem_007_c.png',
  '/env_gem_008.png',
  '/env_gem_009.png',
  '/env_gem_010.png',
  '/env_gem_011.png',
  '/env_gem_012.png',
  '/env_gem_013.png',
  '/env_gem_014.png',
  '/env_gem_015.png',
  '/env_gem_016.png',
  '/env_gem_017.png',
  '/env_gem_018_a.png',
  '/env_gem_018_b.png',
  '/env_gem_018_c.png',
]

export default function TabGemEnv() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Gem Environment</p>
      <div className="flex flex-wrap justify-center gap-2">
        <div className="bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">=</div>
                <label htmlFor="add">
                    <input type="file" id='add' accept='.exr,.hdr' className='hidden' />
                    <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                </label>
        {gemImages.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
                            }`}
                    >
            <Image width={1000} height={1000} src={`/GemEnv/PNG${src}`} alt={`Gem ${idx + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
