const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const SESSIONS_FILE = path.join(__dirname, '..', 'mock', 'sessions.json')
const RESPONSES_FILE = path.join(__dirname, '..', 'mock', 'responses.json')

function readJSON(p) { return JSON.parse(fs.readFileSync(p, 'utf8')) }
function writeJSON(p, data) { fs.writeFileSync(p, JSON.stringify(data, null, 2)) }

// Ask question in a session -> returns dummy table + info
router.post('/:sessionId', (req, res) => {
  const { question } = req.body
  const sessions = readJSON(SESSIONS_FILE)
  const responses = readJSON(RESPONSES_FILE)
  const session = sessions.find(s => s.id === req.params.sessionId)
  if (!session) return res.status(404).json({ error: 'Session not found' })

  // For demo: pick a random response template
  const response = responses[Math.floor(Math.random() * responses.length)]

  const message = {
    id: Date.now().toString(),
    question,
    response,
    createdAt: new Date().toISOString()
  }

  session.history.push(message)
  writeJSON(SESSIONS_FILE, sessions)

  res.json(message)
})

module.exports = router
