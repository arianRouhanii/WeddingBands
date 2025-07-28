'use client'
import React, { useState } from 'react'

export default function TabAdvanced() {
  const [range1Value, setRange1Value] = useState<number>(0)
  const [range2Value, setRange2Value] = useState<number>(0)
  const [sslValue, setSslValue] = useState<number>(0)
  const [sslChecked, setSslChecked] = useState<boolean>(false)

  const getRangeStyle = (value: number, min: number, max: number) => {
    const percent = ((value - min) / (max - min)) * 100
    return {
      backgroundImage: `linear-gradient(to right, #60a5fa 0%, #60a5fa ${percent}%, #d1d5db ${percent}%, #d1d5db 100%)`
    }
  }

  const rangeClass = 'w-full h-3.5 appearance-none bg-gray-300 rounded-full relative overflow-hidden ' + '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 ' + '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border ' + '[&::-webkit-slider-thumb]:border-blue-400 [&::-webkit-slider-thumb]:cursor-pointer ' 

  return (
    <div className="flex w-full p-2 flex-col gap-5">
      <p className="font-bold text-sm text-center">Advanced</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p>Env Rotation</p>
          <p>{range1Value}</p>
        </div>
        <input
          type="range"
          min={0}
          max={6.283}
          step={0.001}
          value={range1Value}
          onChange={(e) => setRange1Value(Number(e.target.value))}
          className={rangeClass}
          style={getRangeStyle(range1Value, 0, 6.283)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p>Env Intensity</p>
          <p>{range2Value}</p>
        </div>
        <input
          type="range"
          min={0}
          max={4}
          step={0.01}
          value={range2Value}
          onChange={(e) => setRange2Value(Number(e.target.value))}
          className={rangeClass}
          style={getRangeStyle(range2Value, 0, 4)}
        />
      </div>
      {['Fixed Env Direction', 'Tonemap Background', 'Enable Cache'].map((label, idx) => (
        <label key={idx} className="relative gap-2 inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-5 h-5 p-1 bg-white border border-gray-300 rounded-full peer peer-checked:bg-blue-400">
            <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff">
              <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" />
            </svg>
          </div>
          <p>{label}</p>
        </label>
      ))}
      <p className="font-bold text-sm text-center">Plugins</p>
      <label className="relative gap-2 inline-flex items-center cursor-pointer">
        <input type="checkbox" onChange={(e) => setSslChecked(e.target.checked)} checked={sslChecked} className="sr-only peer" />
        <div className="w-5 h-5 p-1 bg-white border border-gray-300 rounded-full peer peer-checked:bg-blue-400">
          <svg fill="#ffffff" viewBox="0 0 1920 1920" stroke="#ffffff">
            <path d="M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z" />
          </svg>
        </div>
        <p>SSBevel</p>
      </label>
      <p className={`${sslChecked ? 'opacity-100' : 'opacity-0'} bg-yellow-50 border border-yellow-200 p-3 text-xs rounded-lg`}>
        Enabling SSBevel may slow down the performance.
      </p>
      <div className={`flex flex-col gap-2 ${!sslChecked ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-row justify-between">
          <p>SSBevel Intensity</p>
          <p>{sslValue}</p>
        </div>
        <input
          type="range"
          min={0}
          max={8}
          step={0.01}
          value={sslValue}
          onChange={(e) => setSslValue(Number(e.target.value))}
          disabled={!sslChecked}
          className={rangeClass}
          style={getRangeStyle(sslValue, 0, 8)}
        />
      </div>
    </div>
  )
}
