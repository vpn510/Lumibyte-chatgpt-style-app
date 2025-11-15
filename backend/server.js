const express = require('express')
const cors = require('cors')
const sessionsRouter = require('./routes/sessions')
const chatRouter = require('./routes/chat')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/sessions', sessionsRouter)
app.use('/api/chat', chatRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server listening on', PORT))
