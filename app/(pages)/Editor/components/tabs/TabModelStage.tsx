'use client'
import React from 'react'

export default function TabModelStage() {
  return (
    <div className="flex w-full p-2 items-center flex-col gap-5">
      <p className="font-bold text-sm text-center">Model Stage</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">=</div>
        <div className="bg-gray-300 rounded-lg w-20 aspect-square flex justify-center items-center text-white text-4xl">+</div>
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="bg-blue-400 rounded-lg w-20 aspect-square"></div>
        ))}
      </div>
    </div>
  )
}
