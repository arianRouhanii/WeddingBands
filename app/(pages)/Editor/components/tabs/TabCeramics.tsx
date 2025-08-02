'use client'
import Image from 'next/image'
import React,{useState} from 'react'
const ceramicImages = [
    '/plastic_black.png',
    '/ceramic_black.png',
    '/ceramic_blue_2.png',
    '/plastic_blue.png',
    '/plastic_blue_dark.png',
    '/plastic_blue_indigo.png',
    '/plastic_blue_light.png',
    '/ceramic_blue.png',
    '/ceramic_bluemarine.png',
    '/ceramic_cyan.png',
    '/plastic_green.png',
    '/plastic_green_lime.png',
    '/ceramic_green.png',
    '/ceramic_yellow.png',
    '/plastic_grey.png',
    '/ceramic_grey.png',
    '/plastic_orange.png',
    '/ceramic_orange.png',
    '/ceramic_peach.png',
    '/plastic_pink_light.png',
    '/plastic_pink.png',
    '/plastic_pink_dark.png',
    '/plastic_pink_intense.png',
    '/plastic_purple.png',
    '/plastic_purple_light.png',
    '/ceramic_purple.png',
    '/ceramic_red_2.png',
    '/plastic_red_1.png',
    '/plastic_red_2.png',
    '/ceramic_red.png',
    '/ceramic_rosa.png',
    '/plastic_rose.png',
    '/plastic_turquoise.png',
    '/plastic_violet.png',
    '/plastic_violet_dark.png',
    '/plastic_violet_light.png',
    '/ceramic_violet.png',
    '/plastic_white.png',
    '/ceramic_white.png',
    '/ceramic_yellow_2.png',
    '/ceramic_yellow.png',
    '/plastic_yellow_light.png',
]

export default function TabCeramics() {
        const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    return (
        <div className="flex w-full p-2 items-center flex-col gap-5">
            <p className="font-bold text-sm text-center">Ceramics</p>
            <div className="flex flex-wrap justify-center gap-2">
                <label htmlFor="add">
                    <input type="file" id='add' accept='.pmat' className='hidden' />
                    <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                </label>
                {ceramicImages.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
                            }`}
                    >
                        <Image src={`/Ceramics/PNG${src}`} width={1000} height={1000} alt={`ceramic ${idx + 1}`} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
