// index.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  console.log('Request received, waiting 90 seconds...');
  
  // รอ 90 วินาที (90,000 มิลลิวินาที)
  await new Promise(resolve => setTimeout(resolve, 90000));
  
  console.log('90 seconds passed, sending response...');
  res.send('Hello, Node.js from VS Code! GGEZ (after 90 seconds delay)');
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
