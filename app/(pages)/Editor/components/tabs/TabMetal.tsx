'use client'
import Image from 'next/image'
import React, { useState } from 'react'
const metalImages = [
    '/1_metal_gold_polished.png',
    '/1_metal_rosegold_polished.png',
    '/1_metal_whitegold_polished.png',
    '/2_metal_blackrhodium_polished.png',
    '/2_metal_gold_09K.png',
    '/2_metal_gold_14K.png',
    '/2_metal_gold_22K.png',
    '/2_metal_greengold_polished.png',
    '/2_metal_greygold_polished.png',
    '/2_metal_platinum_polished.png',
    '/2_metal_redgold_polished.png',
    '/2_metal_redgoldlight_polished.png',
    '/2_metal_rosegold_polished.png',
    '/2_metal_sandgold_polished.png',
    '/2_metal_silver_polished.png',
    '/2_metal_warmgold_polished.png',
    '/2_metal_yellowgold_polished.png',
    '/metal_aluminum.png',
    '/metal_black_matt.png',
    '/metal_black_polished.png',
    '/metal_blue_matt.png',
    '/metal_blue_polished_1.png',
    '/metal_blue_polished_2.png',
    '/metal_blue_polished_3.png',
    '/metal_blue_polished_4.png',
    '/metal_brass.png',
    '/metal_bronze.png',
    '/metal_brown_matt.png',
    '/metal_brown_polished.png',
    '/metal_chrome.png',
    '/metal_circles.png',
    '/metal_copper_1.png',
    '/metal_copper_2.png',
    '/metal_copper_3.png',
    '/metal_copper_4.png',
    '/gold_texture_smallscratches_rose.png',
    '/gold_texture_smallscratches_white.png',
    '/gold_texture_smallscratches.png',
    '/metal_gold_texture_1.png',
    '/metal_gold_texture_2.png',
    '/metal_gold_texture_3.png',
    '/metal_gold_texture_4.png',
    '/metal_gold_texture_5.png',
    '/metal_gold_texture_6.png',
    '/metal_gold_texture_7.png',
    '/metal_gold_texture_8.png',
    '/metal_gold_texture_9.png',
    '/metal_green_polished_1.png',
    '/metal_green_polished_2.png',
    '/metal_grey_polished.png',
    '/metal_meteorit.png',
    '/metal_patina_1.png',
    '/metal_patina_2.png',
    '/metal_purple_polished.png',
    '/metal_red_matt.png',
    '/metal_red_polished_1.png',
    '/metal_rosegold_brass.png',
    '/metal_rosegold_brush_1.png',
    '/metal_rosegold_brush_2.png',
    '/metal_rosegold_brush_3.png',
    '/metal_rosegold_hammer.png',
    '/metal_rosegold_hammeredlinear.png',
    '/metal_rosegold_hammeredwave.png',
    '/metal_rosegold_lightscratch.png',
    '/metal_rosegold_matt.png',
    '/metal_rosegold_oxidized.png',
    '/metal_rosegold_polished_2.png',
    '/metal_rosegold_sand.png',
    '/metal_rosegold_scratch.png',
    '/metal_rosegold_sparkle.png',
    '/metal_rosegold_sparklelight.png',
    '/metal_violet_polished.png',
    '/metal_white_enamel.png',
    '/metal_white_polished.png',
    '/metal_whitegold_brush_1.png',
    '/metal_whitegold_brush_2.png',
    '/metal_whitegold_brush_3.png',
    '/metal_whitegold_hammer.png',
    '/metal_whitegold_hammeredlinear.png',
    '/metal_whitegold_hammeredwave.png',
    '/metal_whitegold_lightscratch.png',
    '/metal_whitegold_matt.png',
    '/metal_whitegold_oxidized.png',
    '/metal_whitegold_sand.png',
    '/metal_whitegold_scratch.png',
    '/metal_whitegold_sparkle.png',
    '/metal_whitegold_sparklelight.png',
    '/metal_yellowgold_brass.png',
    '/metal_yellowgold_brush_1.png',
    '/metal_yellowgold_brush_2.png',
    '/metal_yellowgold_brush_3.png',
    '/metal_yellowgold_hammer.png',
    '/metal_yellowgold_hammeredlinear.png',
    '/metal_yellowgold_hammeredwave.png',
    '/metal_yellowgold_lightscratch.png',
    '/metal_yellowgold_matt.png',
    '/metal_yellowgold_oxidized.png',
    '/metal_yellowgold_polished.png',
    '/metal_yellowgold_sand.png',
    '/metal_yellowgold_scratch.png',
    '/metal_yellowgold_sparkle.png',
    '/metal_yellowgold_sparklelight.png',
]

export default function TabMetal() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    return (
        <div className="flex w-full p-2 items-center flex-col gap-5">
            <p className="font-bold text-sm text-center">Metals</p>
            <div className="flex flex-wrap justify-center gap-2">
                <label htmlFor="add">
                    <input type="file" id='add' accept='.pmat' className='hidden' />
                    <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                </label>
                {metalImages.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
                            }`}
                    >
                        <Image src={`/Metal/PNG${src}`} width={1000} height={1000} alt={`metal ${idx + 1}`} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
