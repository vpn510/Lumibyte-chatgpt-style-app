const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const SESSIONS_FILE = path.join(__dirname, '..', 'mock', 'sessions.json')

function readSessions() {
  return JSON.parse(fs.readFileSync(SESSIONS_FILE, 'utf8'))
}

function writeSessions(data) {
  fs.writeFileSync(SESSIONS_FILE, JSON.stringify(data, null, 2))
}

// Fetch all sessions
router.get('/', (req, res) => {
  const sessions = readSessions()
  res.json(sessions)
})

// Start new chat -> returns session id
router.post('/', (req, res) => {
  const sessions = readSessions()
  const newSession = {
    id: uuidv4(),
    title: req.body.title || 'New Chat',
    createdAt: new Date().toISOString(),
    history: []
  }
  sessions.unshift(newSession)
  writeSessions(sessions)
  res.json(newSession)
})

// Fetch session history
router.get('/:sessionId', (req, res) => {
  const sessions = readSessions()
  const s = sessions.find(x => x.id === req.params.sessionId)
  if (!s) return res.status(404).json({ error: 'Not found' })
  res.json(s)
})

module.exports = router
