'use client'
import React, { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'

export default function TabBranding() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [selectedImage2, setSelectedImage2] = useState<File | null>(null)
  const [selectedImage3, setSelectedImage3] = useState<File | null>(null)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const createUploader = (
    id: string,
    selectedImage: File | null,
    setSelectedImage: (file: File | null) => void
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0])
      }
    }

    const handleDelete = () => {
      if (inputRef.current) inputRef.current.value = ''
      setSelectedImage(null)
    }

    return (
      <div className="flex flex-col items-center w-12 h-12">
        <input
          type="file"
          id={id}
          ref={inputRef}
          accept=".png,.jpg,.svg"
          onChange={handleChange}
          className="hidden"
        />
        {!selectedImage ? (
          <label
            htmlFor={id}
            className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer text-white text-3xl"
          >
            +
          </label>
        ) : (
          <div className="relative group w-12 h-12">
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt={`${id}-preview`}
              fill
              className="rounded-full object-cover border-1 border-gray-300"
            />
            <button
              onClick={handleDelete}
              className="absolute -top-1 -right-1 bg-gray-300 text-white rounded-full w-5 h-5 text-xs"
            >
              ×
            </button>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="flex w-full p-2 flex-col gap-5">
      <p className="font-bold text-sm text-center">Branding</p>
      <div className="flex flex-col gap-2">
        <p>Branding Logo</p>
        <div className="flex flex-row gap-2 pb-5">
          {createUploader('logochoose', selectedImage, setSelectedImage)}
          {createUploader('logochoose2', selectedImage2, setSelectedImage2)}
          {createUploader('logochoose3', selectedImage3, setSelectedImage3)}
        </div>
        <div className="flex flex-col gap-5">
          <label className="relative justify-between inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400" />
            <p>show logo</p>
          </label>
          <label className="relative justify-between inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400" />
            <p>loading screen logo</p>
          </label>
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col gap-2">
        <p className="font-bold text-sm text-center text-blue-400">Logo Layout</p>
        <label className="relative justify-between inline-flex items-center cursor-pointer">
          <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} className="sr-only peer" />
          <div className="w-8 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-[70%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-400" />
          <p>Preview</p>
        </label>
        <p>fit</p>
        <select disabled={!isChecked} className={`bg-white border border-gray-300 outline-0 w-full p-2 text-sm rounded-sm ${!isChecked && 'opacity-50'}`}>
          {['Contain', 'Cover', 'Fill', 'Scale down'].map((item, index) => (
            <option key={index} value={item.toLowerCase()}>{item}</option>
          ))}
        </select>
        <p>Size</p>
        <div className="flex flex-row gap-2">
          <input type="number" disabled={!isChecked} className={`outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2 ${!isChecked && 'opacity-50'}`} />
          <input type="number" disabled={!isChecked} className={`outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2 ${!isChecked && 'opacity-50'}`} />
        </div>
        <p>Position</p>
        <div className="flex flex-row gap-2">
          <input type="number" disabled={!isChecked} className={`outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2 ${!isChecked && 'opacity-50'}`} />
          <input type="number" disabled={!isChecked} className={`outline-0 border border-gray-300 w-1/2 bg-white rounded-sm px-2 ${!isChecked && 'opacity-50'}`} />
        </div>
      </div>
    </div>
  )
}
