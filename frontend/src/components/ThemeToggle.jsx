import React from 'react'

export default function ThemeToggle({theme,setTheme}){
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
