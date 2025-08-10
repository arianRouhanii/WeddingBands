'use client'
import React from 'react'
import { JSX } from 'react'
import TabMetal from './tabs/TabMetal'
import TabGems from './tabs/TabGems'
import TabCeramics from './tabs/TabCeramics'
import TabPearls from './tabs/TabPearls'
import TabEnvironment from './tabs/TabEnviroment'
import TabGemEnv from './tabs/TabGemEnv'
import TabBackground from './tabs/TabBackground'
import TabScene from './tabs/TabScene'
import TabModelStage from './tabs/TabModelStage'
import TabGround from './tabs/TabGround'
import TabPoses from './tabs/TabPoses'
import TabExport from './tabs/TabExport'
import TabBranding from './tabs/TabBranding'
import TabAdvanced from './tabs/TabAdvanced'
import TabProjectSettings from './tabs/TabProjectSettings'

type TabOption =
  | 'Metal' | 'Gems' | 'Ceramics' | 'Pearls' | 'Enviroment' | 'GemEnv'
  | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses'
  | 'Export' | 'Branding' | 'Advanced' | 'ProjectSettings' | null

interface TabPanelProps {
  selectedOption: TabOption
  setSelectedOption: React.Dispatch<React.SetStateAction<TabOption>>
}

const tabs: { id: Exclude<TabOption, null>; label: string; content: JSX.Element }[] = [
  { id: 'Metal', label: 'Metals', content: <TabMetal /> },
  { id: 'Gems', label: 'Gems', content: <TabGems /> },
  { id: 'Ceramics', label: 'Ceramics', content: <TabCeramics /> },
  { id: 'Pearls', label: 'Pearls', content: <TabPearls /> },
  { id: 'Enviroment', label: 'Environments', content: <TabEnvironment /> },
  { id: 'GemEnv', label: 'Gem Environments', content: <TabGemEnv /> },
  { id: 'Background', label: 'Backgrounds', content: <TabBackground /> },
  { id: 'Scene', label: 'Scene Presets', content: <TabScene /> },
  { id: 'ModelStage', label: 'Stages', content: <TabModelStage /> },
  { id: 'Ground', label: 'Grounds', content: <TabGround /> },
  { id: 'Poses', label: 'Poses', content: <TabPoses /> },
  { id: 'Export', label: 'Export', content: <TabExport /> },
  { id: 'Branding', label: 'Branding Settings', content: <TabBranding /> },
  { id: 'Advanced', label: 'Advanced Settings', content: <TabAdvanced /> },
  { id: 'ProjectSettings', label: 'Project Settings', content: <TabProjectSettings /> },
]

export default function TabPanel({ selectedOption, setSelectedOption }: TabPanelProps) {
  return (
    <div className="w-full h-[85vh] overflow-y-auto select-none rounded-lg px-0.5 space-y-2">
      {tabs.map(({ id, label, content }) => {
        const isOpen = selectedOption === id
        return (
          <div key={id} className=" bg-blue-100 rounded-lg shadow-sm border-gray-300">
            <div className={isOpen ? 'sticky rounded-t-lg  top-0 z-10 bg-blue-200  border-gray-300' : ''}>
              <button
                onClick={() => setSelectedOption(isOpen ? null : id)}
                className="w-full flex justify-between items-center p-2"
              >
                <span className="text-xs font-bold">{label}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div
              className={` bg-[#EBEBEB] transition-all duration-1000 ease-in-out overflow-y-scroll ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className=" p-2">{content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}