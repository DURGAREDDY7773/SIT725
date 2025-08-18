const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from /public (your HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const projectsRoute = require('./routes/projects');
app.use('/api/projects', projectsRoute);

// Root route -> serve index.html automatically
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
