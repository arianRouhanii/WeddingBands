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
import Sidebar from './tabs/TabProjectSettings'

type TabOption =
  | 'Metal' | 'Gems' | 'Ceramics' | 'Pearls' | 'Enviroment' | 'GemEnv'
  | 'Background' | 'Scene' | 'ModelStage' | 'Ground' | 'Poses'
  | 'Export' | 'Branding' | 'Advanced' | 'Sidebar' | null

interface TabPanelProps {
  selectedOption: TabOption
  setSelectedOption: React.Dispatch<React.SetStateAction<TabOption>>
}

const tabIcons: { id: Exclude<TabOption, null>; label: string }[] = [
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
  { id: 'Advanced', label: 'Advanced Settings' },
  { id: 'Sidebar', label: 'Sidebar' },
]

const getIcon = (id: string, isActive: boolean) => {
  const color = isActive ? '#3B82F6' : '#9CA3AF'

  const icons: { [key: string]: JSX.Element } = {
    Metal: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" /><path d="M2 7v7c0 5 10 9 10 9s10-4 10-9V7" /></svg>
    ),
    Gems: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 18 3 22 9 12 21 2 9 6 3" /></svg>
    ),
    Ceramics: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /></svg>
    ),
    Pearls: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /></svg>
    ),
    Enviroment: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /></svg>
    ),
    GemEnv: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 18 3 22 9 12 21 2 9 6 3" /></svg>
    ),
    Background: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /></svg>
    ),
    Scene: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /></svg>
    ),
    ModelStage: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" /><path d="M12 2v20" /></svg>
    ),
    Ground: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" /></svg>
    ),
    Poses: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M14 10l-4 4M10 10l4 4" /></svg>
    ),
    Export: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" /></svg>
    ),
    Branding: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" /></svg>
    ),
    Advanced: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /></svg>
    ),
    Sidebar: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" /></svg>
    )
  }

  return icons[id] || icons['Advanced']
}

const renderContent = (id: TabOption) => {
  switch (id) {
    case 'Metal': return <TabMetal />
    case 'Gems': return <TabGems />
    case 'Ceramics': return <TabCeramics />
    case 'Pearls': return <TabPearls />
    case 'Enviroment': return <TabEnvironment />
    case 'GemEnv': return <TabGemEnv />
    case 'Background': return <TabBackground />
    case 'Scene': return <TabScene />
    case 'ModelStage': return <TabModelStage />
    case 'Ground': return <TabGround />
    case 'Poses': return <TabPoses />
    case 'Export': return <TabExport />
    case 'Branding': return <TabBranding />
    case 'Advanced': return <TabAdvanced />
    case 'Sidebar': return <Sidebar />
    default: return <div className="p-4 text-gray-400">Select an option</div>
  }
}

export default function TabPanel({ selectedOption, setSelectedOption }: TabPanelProps) {
  return (
    <div className="flex flex-col h-[85vh] gap-2 overflow-y-scroll">
      <div className="w-full justify-between grid grid-cols-5 gap-5 items-start  border-gray-300">
        {tabIcons.map(({ id }) => (
          <button
            key={id}
            onClick={() => setSelectedOption(id)}
            className={`p-1 flex items-center justify-center ${
              selectedOption === id ? '' : ''
            }`}
          >
            {getIcon(id, selectedOption === id)}
          </button>
        ))}
      </div>
      <div className="w-full h-7/8 flex-1 overflow-y-auto">
        {renderContent(selectedOption)}
      </div>
    </div>
  )
}
