'use client'
import React from 'react'

export default function TabPoses() {
  return (
    <div className="flex w-full p-2 flex-col gap-3">
      <p className="font-bold text-sm text-center">Poses</p>
      <button className="px-2 py-1 rounded-full outline-0 bg-blue-400 hover:bg-blue-500 text-white">Compute</button>
    </div>
  )
}
