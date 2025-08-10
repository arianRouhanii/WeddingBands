'use client'
import React, { useState } from 'react'
import Topbar from './components/Topbar'
import TabPanel from './components/TabPanel'

export default function Editor() {
  const [selectedOption, setSelectedOption] = useState<
    | 'Metal' | 'Gems' | 'Ceramics' | 'Pearls' | 'Enviroment' | 'GemEnv' | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses' | 'Export' | 'Branding' | 'Advanced' | 'Sidebar' | null
  >('Metal')

  return (
    <main className="text-[#06213D] h-[100vh] text-xs hidden xl:flex flex-col bg-[#EBEBEB]">
      <Topbar />
      <div className="w-full h-11/12 py-7.5 px-2 gap-2 items-center flex flex-row">
        <div className='w-1/8'>
          <TabPanel selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>
        <div className="w-7/8 h-full bg-blue-200 rounded-lg cursor-grab items-center justify-center flex" >3D model</div>
      </div>
    </main>
  )
}
