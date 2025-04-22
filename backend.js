// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port for the server
const PORT = 3000;

// Define a simple GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js server!');
});

// Define another GET route for a specific endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'This is the /api endpoint', status: 'success' });
});

// Define a GET route with a dynamic parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Access the dynamic parameter
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});