# Random Quote Generator

A sleek, minimal random quote generator with React frontend and Express backend.

## Features

- Fetches quotes from external API
- Displays them on a clean UI
- With a click or refresh new quote is generated

## Project Structure

```
quote-generator/
├── frontend/
│   ├── src/
│   │   └── QuoteBox.js
│   └── package.json
├── backend/
│   ├── server.js
│   └── package.json
└── README.md
```

## Quick Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vasita27/random-quote-generator.git
   cd random-quote-generator
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Server runs on `http://localhost:5000`

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   App runs on `http://localhost:5173`

## Usage

1. Start the backend server first
2. Start the frontend
3. Click "Get New Quote" to fetch random quotes

## Dependencies

**Backend:**
- express
- axios  
- cors

**Frontend:**
- react
- axios

## API Endpoint

- `GET /api/quotes/random` - Returns a random quote with text and author
