const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// GET /api/projects
router.get('/', Controllers.projectController.getAllProjects);

module.exports = router;
