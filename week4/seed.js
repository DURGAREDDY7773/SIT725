const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB for seeding!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error during seeding:', err);
});

// Define Schema and Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Sample projects
const sampleProjects = [
  {
    title: "Kitten",
    image: "images/kitten.jpg",
    link: "About Kitten",
    description: "Demo description about kitten"
  },
  {
    title: "Kitten 2",
    image: "images/kitten2.jpeg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2"
  }
];

// Insert many projects
Project.insertMany(sampleProjects)
  .then(() => {
    console.log("Sample projects inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error inserting sample projects:", err);
    mongoose.connection.close();
  });
