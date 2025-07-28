'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Topbar() {
  return (
    <div className="w-full justify-between p-2.5 md:pt-11 gap-6 xl:gap-0 h-1/12 items-center flex flex-row">
      <Link href={'/Dashboard'} className="w-1/8 pr-8 justify-start">
        <Image width={1000} height={1000} alt="logo" src={'/logo.png'} />
      </Link>
      <div className="w-1/8 pl-8 flex flex-row gap-2" dir="rtl">
        <button className="bg-red-400 rounded-full w-8 aspect-square text-white justify-center flex items-center">KO</button>
        <div className="flex text-sm font-bold flex-row gap-0.5">
          <button className="bg-blue-400 hover:bg-blue-500 rounded-r-xl h-8 px-4 text-white">+</button>
          <button className="bg-blue-400 hover:bg-blue-500 rounded-l-xl h-8 px-5 text-white">Save</button>
        </div>
      </div>
    </div>
  )
}
