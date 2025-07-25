// Import the Express module so we can create a web server.
const express = require('express');
// Import Node.js's built-in 'path' module to help with file paths.
const path = require('path');
// Create an instance of an Express application.
const app = express();
// Define the port number to listen on.
// It uses an environment variable PORT if provided; otherwise, it defaults to 3000.
const PORT = process.env.PORT || 3000;
// Set up middleware to serve static files from the "public" folder.
// Middleware to parse JSON body for POST requests
app.use(express.json());
// This means that when a request is made to the root URL ("/"),
// Express will look for a file named index.html (or other static assets) inside the "public" directory.
app.use(express.static(path.join(__dirname, 'public')));
// Define a GET endpoint at '/square' that calculates the square of a number.
// The endpoint expects a query parameter 'num', e.g., /square?num=5
// GET /add?num1=5&num2=10  => adds two numbers from query parameters
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.send(`<h1>Error: Please provide valid numbers 'num1' and 'num2'.</h1><a href="/">Go Back</a>`);
    }
  
    const result = num1 + num2;
    res.send(`
      <h1>Result</h1>
      <p>${num1} + ${num2} = ${result}</p>
      <a href="/">Go Back</a>
    `);
  });
  // POST /add  with JSON body { "num1": 5, "num2": 10 }
  app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ error: "Please provide valid numbers 'num1' and 'num2' in JSON body." });
    }
  
    const result = num1 + num2;
    res.json({ result });
  });

// Start the server and have it listen on the specified port.
// Once the server is running, log a message to the console indicating where it's accessible.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
