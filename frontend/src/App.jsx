import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import ThemeToggle from './components/ThemeToggle'
import { useParams } from 'react-router-dom'

export default function App(){
  const [collapsed,setCollapsed] = useState(false)
  const [theme,setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const params = useParams()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex h-screen">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="flex-1 flex flex-col">
          <header className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-lg font-semibold">Welcome Lumibyte Chat</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </header>
          <main className="p-4 overflow-auto">
            <ChatWindow sessionId={params.sessionId} />
          </main>
        </div>
      </div>
    </div>
  )
}
