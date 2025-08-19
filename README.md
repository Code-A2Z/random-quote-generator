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

## API Endpoint

- `GET /api/quotes/random` - Returns a random quote with text and author
