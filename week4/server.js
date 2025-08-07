const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.port || 3004;

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Schema and Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// REST API Route
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Failed to fetch projects', error: err });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
