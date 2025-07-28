'use client'
import React from 'react'

export default function TabExport() {
  return (
    <div className="flex w-full p-2 flex-col gap-3">
      <p className="font-bold text-sm text-center">Export</p>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-sm text-center text-blue-400">Snapshot</p>
        <p>Size</p>
        <div className="flex flex-row gap-2">
          <input type="number" className="outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2" />
          <input type="number" className="outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2" />
        </div>
        <select className="bg-white border border-gray-300 px-2 py-1 rounded-sm outline-0">
          <option value="">png</option>
          <option value="">jpeg</option>
          <option value="">webp</option>
        </select>
        <button className="px-2 py-1 rounded-full outline-0 bg-blue-400 hover:bg-blue-500 text-white">Download</button>
      </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-sm text-center text-blue-400">3D file</p>
        <label className="relative gap-2 inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-5 h-5 p-1 bg-white border border-gray-300 rounded-full peer peer-checked:bg-blue-400">
            <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff">
              <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" />
            </svg>
          </div>
          <p>Compress</p>
        </label>
        <button className="px-2 py-1 rounded-full outline-0 bg-blue-400 hover:bg-blue-500 text-white">Download</button>
      </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-sm text-center text-blue-400">Scene Settings</p>
        <p className="text-xs">
          Export your setup, including all scene settings — HDRs, background, ground, and configurators.
        </p>
        <button className="px-2 py-1 rounded-full outline-0 bg-blue-400 hover:bg-blue-500 text-white">Download</button>
      </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-sm text-center text-blue-400">Turntable video</p>
        <p>Size</p>
        <div className="flex flex-row gap-2">
          <input type="number" className="outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2" />
          <input type="number" className="outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2" />
        </div>
        <div className="flex flex-row gap-2 w-[96%]">
          <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor="FPS">FPS</label>
            <input type="number" id="FPS" className="outline-0 border border-gray-300 bg-white rounded-sm px-2" />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor="AA">AA quality</label>
            <input type="number" id="AA" className="outline-0 border border-gray-300 bg-white rounded-sm px-2" />
          </div>
        </div>
        <p>Duration</p>
        <input type="number" className="outline-0 border border-gray-300 w-full bg-white rounded-sm px-2" />
        <button className="px-2 py-1 rounded-full outline-0 bg-blue-400 hover:bg-blue-500 text-white">Download</button>
      </div>
    </div>
  )
}
