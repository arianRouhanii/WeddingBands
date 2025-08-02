'use client'
import Image from 'next/image'
import React, { useState } from 'react'
const gemsImages = [
    '/1_gem_diamond_white_1.png',
    '/1_gem_diamond_white_2.png',
    '/1_gem_diamond_white_3.png',
    '/1_gem_emerald_1.png',
    '/1_gem_emerald_2.png',
    '/1_gem_emerald_incl_01.png',
    '/1_gem_emerald_incl_02.png',
    '/1_gem_ruby_1.png',
    '/1_gem_ruby_2.png',
    '/1_gem_ruby_incl_01.png',
    '/1_gem_ruby_incl_02.png',
    '/1_gem_sapphire_1.png',
    '/1_gem_sapphire_2.png',
    '/1_gem_sapphire_incl_01.png',
    '/1_gem_sapphire_incl_02.png',
    '/1_gem_sapphire_yellow_incl_01.png',
    '/1_gem_sapphire_yellow_incl_02.png',
    '/2_gem_diamond_black.png',
    '/2_gem_diamond_blue_1.png',
    '/2_gem_diamond_blue_2.png',
    '/2_gem_diamond_brown.png',
    '/2_gem_diamond_d_colorless.png',
    '/2_gem_diamond_green_1.png',
    '/2_gem_diamond_green_2.png',
    '/2_gem_diamond_h_nearcolorless.png',
    '/2_gem_diamond_k_faintyellow.png',
    '/2_gem_diamond_p_verylightyellow.png',
    '/2_gem_diamond_pink_1.png',
    '/2_gem_diamond_pink_2.png',
    '/2_gem_diamond_t_lightyellow.png',
    '/2_gem_diamond_yellow_1.png',
    '/2_gem_diamond_yellow_2.png',
    '/alexandrit.png',
    '/gem_amethyst_2.png',
    '/gem_aquamarin.png',
    '/gem_cabachon_amethyst.png',
    '/gem_cabachon_emerald.png',
    '/gem_cabachon_ruby.png',
    '/gem_cabachon_sapphire_yellow.png',
    '/gem_cabachon_sapphire.png',
    '/gem_cabachon_topaz.png',
    '/gem_citrine.png',
    '/gem_emerald_incl_01.png',
    '/gem_emerald_incl_03.png',
    '/gem_emerald_incl_04.png',
    '/gem_emerald_incl_05.png',
    '/gem_emerald_incl_06.png',
    '/gem_emerald_incl_07.png',
    '/gem_emerald_incl_08.png',
    '/gem_emerald_incl_09.png',
    '/gem_emerald_incl_10.png',
    '/gem_emerald_incl_11.png',
    '/gem_emerald_incl_12.png',
    '/gem_emerald_incl_13.png',
    '/gem_emerald_incl_14.png',
    '/gem_emerald_incl_15.png',
    '/gem_garnet_red.png',
    '/gem_gem_amethist.png',
    '/gem_morganit.png',
    '/gem_peridot.png',
    '/gem_quartz_smoky.png',
    '/gem_rhodolite_garnet.png',
    '/gem_ruby_cabachon_2.png',
    '/gem_ruby_incl_03.png',
    '/gem_ruby_incl_04.png',
    '/gem_ruby_incl_05.png',
    '/gem_ruby_incl_06.png',
    '/gem_ruby_incl_07.png',
    '/gem_ruby_incl_08.png',
    '/gem_ruby_incl_09.png',
    '/gem_ruby_incl_10.png',
    '/gem_ruby_incl_11.png',
    '/gem_ruby_incl_12.png',
    '/gem_ruby_incl_13.png',
    '/gem_sapphire_cabachon_2.png',
    '/gem_sapphire_green.png',
    '/gem_sapphire_incl_03.png',
    '/gem_sapphire_incl_04.png',
    '/gem_sapphire_incl_05.png',
    '/gem_sapphire_incl_06.png',
    '/gem_sapphire_pink.png',
    '/gem_sapphire_yellow_incl_03.png',
    '/gem_sapphire_yellow_incl_04.png',
    '/gem_sapphire_yellow_incl_05.png',
    '/gem_sapphire_yellow_incl_06.png',
    '/gem_sapphire_yellow_incl_07.png',
    '/gem_sapphire_yellow_incl_08.png',
    '/gem_sapphire_yellow_incl_09.png',
    '/gem_sapphire_yellow_incl_10.png',
    '/gem_sapphire_yellow_incl_11.png',
    '/gem_sapphire_yellow.png',
    '/gem_tansanit_2.png',
    '/gem_tansanit.png',
    '/gem_topas.png',
    '/gem_tourmalin_green.png',
    '/gem_tourmalin_rose.png',
    '/gem_tsavorit.png',
    '/gem_zircon_blue.png',
    '/gem_zircon_brown.png',
    '/gem_zircon_cinnamon.png',
    '/gem_zircon_green.png',
    '/gem_zircon_red.png',
    '/gem_zircon_turquoise.png',
    '/gem_zircon_white.png',
    '/gem_zircon_yellow.png',
]

export default function TabGems() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    return (
        <div className="flex w-full p-2 items-center flex-col gap-5">
            <p className="font-bold text-sm text-center">Gems</p>
            <div className="flex flex-wrap justify-center gap-2">
                <label htmlFor="add">
                    <input type="file" id='add' accept='.dmat' className='hidden' />
                    <div className="cursor-pointer bg-gray-300 rounded-full w-12 aspect-square flex justify-center items-center text-white text-4xl">+</div>
                </label>

                {gemsImages.map((src, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={` rounded-full w-12 aspect-square flex justify-center items-center overflow-hidden cursor-pointer transition border-2 ${selectedIndex === idx ? 'border-blue-400' : 'border-transparent'
                            }`}
                    >
                        <Image src={`/Gems/PNG${src}`} width={1000} height={1000} alt={`gem ${idx + 1}`} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
