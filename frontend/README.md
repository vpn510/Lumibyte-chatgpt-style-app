📘 Lumibyte ChatGPT-Style Application

Tech Stack: React, JavaScript, TailwindCSS, Node.js (Express)

A fully responsive, dark/light theme ChatGPT-like application built using React (frontend) and Express.js (backend).
This assignment demonstrates structured API integration, session handling, and a modern chat UI inspired by ChatGPT.

🚀 Features
✔ Frontend (React + TailwindCSS)

Landing Page with “New Chat”

Collapsible Sidebar

Session history

User details

Fully responsive (mobile ↔ desktop)

Chat Window

Submit questions

Responses shown in:

Tabular View

Description View

Feedback buttons: 👍 👎

Dark / Light Theme

Full theme switch

Automatically saved in localStorage

Mobile-Optimized

Sidebar becomes drawer

Tables convert to card layout

🗄 Backend (Node.js + Express)

Uses mock JSON files, no database needed

APIs Include:

Create new chat session

Ask a question

Fetch all sessions

Get chat history for each session

Dummy responses auto-generated

📂 Project Structure
Lumibyte_Chat_Gpt_Style_app/
│
├── frontend/      → React + Tailwind Client
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   └── TableView.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── tailwind.config.js
│
├── backend/       → Node.js + Express API
│   ├── mock/
│   │   ├── sessions.json
│   │   └── responses.json
│   ├── routes/
│   │   ├── sessions.js
│   │   └── chat.js
│   ├── server.js
│   └── package.json
│
└── README.md


🖥 Backend Setup
cd backend
npm install
npm start


🌐 Frontend Setup
cd frontend
npm install
npm run dev


🧩 API Routes
Method	Endpoint	Description
POST	/api/sessions	Create new chat session
GET	/api/sessions	Get session list
GET	/api/sessions/:id	Load session history
POST	/api/chat/:id	Ask question within session

API returns:

Table data

Text description

Timestamp

Feedback fields (like/dislike)

🌙 Dark / Light Mode

Top nav toggle switch

Themes:

Background

Text

Borders

Sidebar

Cards

Saves automatically in browser storage

📱 Responsive Design

Sidebar becomes drawer on small screens

Chat window takes full width

Table → Card layout for mobile

🧪 Mock Data Advantage

No database required

Easy debugging

Ideal for interview-ready assignments

📝 Optional Enhancements (You can add later)

Real AI API integration

User login + authentication

Cloud database

Export chat as PDF

Voice input + TTS

Model selection (GPT-3.5, GPT-4o-mini etc.)
