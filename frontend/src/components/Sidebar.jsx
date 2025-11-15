import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ collapsed, setCollapsed }) {
  const [sessions, setSessions] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchSessions()
  }, [])

  async function fetchSessions() {
    try {
      const res = await axios.get('http://localhost:4000/api/sessions')
      setSessions(res.data)
    } catch (e) { console.error(e) }
  }

  async function newChat() {
    try {
      const res = await axios.post('http://localhost:4000/api/sessions', {
        title: 'New Chat',
      })
      navigate(`/session/${res.data.id}`)
      setCollapsed(true) // mobile par auto close
    } catch (e) { console.error(e) }
  }

  return (
    <>
      {/* MOBILE OVERLAY */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-40"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed sm:static top-0 left-0 h-full bg-white dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700 p-4 w-72 z-50
        transform transition-transform duration-300
        ${collapsed ? "-translate-x-full sm:translate-x-0" : "translate-x-0"}
      `}
      >
        {/* TOP USER INFO */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-bold">You</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              vipin@example.com
            </div>
          </div>

          {/* MOBILE CLOSE BTN */}
          <button
            className="text-sm sm:hidden px-2 py-1 border rounded"
            onClick={() => setCollapsed(true)}
          >
            Close
          </button>
        </div>

        {/* NEW CHAT BTN */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mb-4"
          onClick={newChat}
        >
          + New Chat
        </button>

        {/* SESSIONS LIST */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Sessions</h3>
          <ul className="space-y-2">
            {sessions.map((s) => (
              <li key={s.id}>
                <button
                  className="w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    navigate(`/session/${s.id}`)
                    setCollapsed(true) // mobile: auto close
                  }}
                >
                  <div className="text-sm font-medium">
                    {s.title || s.id}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(s.createdAt).toLocaleString()}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
