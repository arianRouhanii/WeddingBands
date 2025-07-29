'use client'
import React from 'react'
export default function Sidebar() {
  return (
    <div className="w-1/8 relative text-sm pr-2.5 h-full hidden xl:flex flex-col gap-10">
      <div className="flex flex-row gap-2">
        <p className="font-bold">Project settings</p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <img className="rounded-lg" alt="" src={'/FilePic.png'} />
        <button className="bg-blue-400 hover:bg-blue-500 rounded-full w-full py-1.5 font-bold text-white">Update Poster</button>
      </div>
      <div className="flex flex-col gap-3">
        <textarea className="w-full outline-0 border-[1px] border-gray-300 bg-white p-2 text-sm resize-none h-[100px] rounded-sm" placeholder="Description" />
        <select className="bg-white outline-0 border-[1px] border-gray-300 w-full p-2 hover:bg-gray-200 text-sm rounded-sm">
          {['Rings', 'Eaarrings', 'Necklaces', 'Bracelets', 'Watches', 'Other'].map((item, index) => (
            <option key={index} value={item.toLowerCase()}>{item}</option>
          ))}
        </select>
        <input type="text" placeholder="Add tags" className="bg-white outline-0 hover:bg-gray-200 border-[1px] border-gray-300 w-full p-2 text-sm rounded-lg" />
      </div>
    </div>
  )
}
