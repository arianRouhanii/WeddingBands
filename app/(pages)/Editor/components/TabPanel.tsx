'use client'
import React, { JSX } from 'react'
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
type TabOption = | 'Metal' | 'Gems' | 'Ceramics' | 'Pearls' | 'Enviroment' | 'GemEnv' | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses' | 'Export' | 'Branding' | 'Advanced'
interface TabPanelProps {
  selectedOption: TabOption
  setSelectedOption: React.Dispatch<React.SetStateAction<TabOption>>
}
const tabIcons: { id: TabOption; label: string }[] = [
  { id: 'Metal', label: 'Metals' },
  { id: 'Gems', label: 'Gems' },
  { id: 'Ceramics', label: 'Ceramics' },
  { id: 'Pearls', label: 'Pearls' },
  { id: 'Enviroment', label: 'Environments' },
  { id: 'GemEnv', label: 'Gem Environments' },
  { id: 'Background', label: 'Backgrounds' },
  { id: 'Scene', label: 'Scene Presets' },
  { id: 'ModelStage', label: 'Stages' },
  { id: 'Ground', label: 'Grounds' },
  { id: 'Poses', label: 'Poses' },
  { id: 'Export', label: 'Export' },
  { id: 'Branding', label: 'Branding Settings' },
  { id: 'Advanced', label: 'Advanced Settings' }
]


const getIcon = (id: string, isActive: boolean) => {
  const color = isActive ? '#3B82F6' : '#9CA3AF'

  const icons: { [key: string]: JSX.Element } = {
    Metal: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    Gems: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    Ceramics: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    Pearls: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    Enviroment: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    GemEnv: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 18 3 22 9 12 21 2 9 6 3" /></svg>
    ),
    Background: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
    ),
    Scene: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M14.31 8l5.74 9.94" /><path d="M9.69 8h11.48" /><path d="M7.38 12l5.74-9.94" /><path d="M9.69 16L3.95 6.06" /><path d="M14.31 16H2.83" /><path d="M16.62 12l-5.74 9.94" /></svg>
    ),
    ModelStage: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" /><path d="M12 2v20" /></svg>
    ),
    Ground: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" /></svg>
    ),
    Poses: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M14 10l-4 4M10 10l4 4" /></svg>
    ),
    Export: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
    ),
    Branding: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 1 0 7.78l-1.42 1.42-7.78 7.78-5.5-5.5L3 12.5 10.79 4.71a5.5 5.5 0 0 1 7.78 0z" /></svg>
    ),
    Advanced: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    )
  }

  return icons[id] || icons['Advanced']
}

export default function TabPanel({ selectedOption, setSelectedOption }: TabPanelProps) {
  return (
    <div className="w-1/8 relative text-sm h-full flex flex-row">
      <div className="w-9/10 select-none bg-[#EBEBEB] overflow-y-scroll">
        {selectedOption === 'Metal' && <TabMetal />}
        {selectedOption === 'Gems' && <TabGems />}
        {selectedOption === 'Ceramics' && <TabCeramics />}
        {selectedOption === 'Pearls' && <TabPearls />}
        {selectedOption === 'Enviroment' && <TabEnvironment />}
        {selectedOption === 'GemEnv' && <TabGemEnv />}
        {selectedOption === 'Background' && <TabBackground />}
        {selectedOption === 'Scene' && <TabScene />}
        {selectedOption === 'ModelStage' && <TabModelStage />}
        {selectedOption === 'Ground' && <TabGround />}
        {selectedOption === 'Poses' && <TabPoses />}
        {selectedOption === 'Export' && <TabExport />}
        {selectedOption === 'Branding' && <TabBranding />}
        {selectedOption === 'Advanced' && <TabAdvanced />}
      </div>
      <div className="w-1/10 flex flex-col overflow-scroll p-1 gap-5 items-center">
        {tabIcons.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedOption(id)}
            className="group flex flex-row-reverse rounded-full p-1 aspect-square w-9 items-center justify-center"
          >
            {getIcon(id, selectedOption === id)}
            <span className="text-xs absolute right-8 bg-white rounded-full py-1 px-3 font-bold delay-200 text-gray-500 opacity-0 group-hover:opacity-100 pointer-events-none">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
