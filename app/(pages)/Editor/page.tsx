'use client'
import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import TabPanel from './components/TabPanel'

export default function Editor() {
  const [selectedOption, setSelectedOption] = useState<
    'Enviroment' | 'GemEnv' | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses' | 'Export' | 'Branding' | 'Advanced'
  >('Enviroment')

  return (
    <main className="text-[#06213D] h-[100vh] text-xs hidden xl:flex flex-col bg-[#EBEBEB]">
      <Topbar />
      <div className="w-full h-11/12 py-7.5 pr-2.5 pl-2.5 items-center flex flex-row">
        <Sidebar />
        <div className="w-6/8 h-full bg-blue-200 rounded-lg cursor-grab items-center justify-center flex" >3D model</div>
        <TabPanel selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
    </main>
  )
}
