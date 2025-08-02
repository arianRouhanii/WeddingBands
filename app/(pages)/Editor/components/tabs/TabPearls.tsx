'use client'
import Image from 'next/image'
import React, { useState } from 'react'
const pearlImages = [
    '/pearl_blue_pearlmutt.png',
    '/pearl_gold_1.png',
    '/pearl_gold_2.png',
    '/pearl_green_01.png',
    '/pearl_green_02.png',
    '/pearl_grey_light.png',
    '/pearl_grey.png',
    '/pearl_peach.png',
    '/pearlmutt_01.png',
    '/pearlmutt_02.png',
    '/pearlmutt_03.png',
    '/pearlmutt_04.png',
    '/pearlmutt_05.png',
    '/pearl_pearlmutt.png',
    '/pearl_perlmutt_06.png',
    '/pearl_pink_light.png',
    '/pearl_rose_1.png',
    '/pearl_rose_2.png',
    '/pearl_sweet_1.png',
    '/pearl_sweet_2.png',
    '/pearl_sweet_3.png',
    '/pearl_sweet_4.png',
    '/pearl_sweet_5.png',
    '/pearl_sweet_6.png',
    '/pearl_white_3.png',
    '/pearl_white_4.png',
    '/pearl_white_5.png',
    '/pearl_tahity_1.png',
    '/pearl_tahity_2.png',
    '/pearl_tahity_3.png',
    '/pearl_tahity_4.png',
    '/pearl_green_03.png',
    '/pearl_white_1.png',
    '/pearl_white_2.png',
]

export default function TabPearls() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    return (
        <div className="flex w-full p-2 items-center flex-col gap-5">
            <p className="font-bold text-sm text-center">Pearls</p>
            <div className="flex flex-wrap justify-center gap-2">
                <label htmlFor="add">
                    <input type="file" id='add' accept='.pmat' className='hidden' />
                    <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                </label>

                {pearlImages.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
                            }`}
                    >
                        <Image
                            src={`/Pearls/PNG${src}`} width={1000} height={1000} alt={`pearl ${idx + 1}`} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
