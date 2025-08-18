const projectService = require('../services/projectServer');

exports.getAllProjects = (req, res) => {
  const projects = projectService.getAllProjects();
  res.json({ statusCode: 200, data: projects, message: 'Success' });
};
 