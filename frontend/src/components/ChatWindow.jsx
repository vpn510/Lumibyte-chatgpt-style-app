import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableView from './TableView'

export default function ChatWindow({sessionId}) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!sessionId) return
    fetchHistory()
  }, [sessionId])

  async function fetchHistory(){
    try{
      const res = await axios.get(`http://localhost:4000/api/sessions/${sessionId}`)
      setHistory(res.data.history || [])
    }catch(e){ console.error(e) }
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!input.trim()) return
    setLoading(true)
    try{
      const res = await axios.post(`http://localhost:4000/api/chat/${sessionId}`, { question: input })
      setHistory(prev => [...prev, res.data])
      setInput('')
    }catch(e){ console.error(e) }
    setLoading(false)
  }

  async function sendFeedback(messageId, type){
    // For demo: feedback stored client-side
    setHistory(prev => prev.map(m => m.id === messageId ? {...m, feedback: type} : m))
  }

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      <div className="space-y-4">
        {history.map(msg => (
          <div key={msg.id} className="p-4 rounded bg-white dark:bg-gray-800 shadow-sm">
            <div className="mb-2 text-sm text-gray-500">Q: {msg.question}</div>
            <div className="mb-2">{msg.response?.description}</div>
            <TableView table={msg.response?.table} />
            <div className="mt-2 flex gap-2 items-center">
              <button onClick={() => sendFeedback(msg.id, 'like')} className="px-2 py-1 rounded border">👍</button>
              <button onClick={() => sendFeedback(msg.id, 'dislike')} className="px-2 py-1 rounded border">👎</button>
              {msg.feedback && <div className="text-sm text-gray-500">You {msg.feedback}</div>}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto flex gap-2 sticky bottom-4 bg-transparent pt-4">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask something..." className="flex-1 p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
        <button className="px-4 py-3 bg-blue-500 text-white rounded" disabled={loading}>{loading ? '...' : 'Send'}</button>
      </form>
    </div>
  )
}
