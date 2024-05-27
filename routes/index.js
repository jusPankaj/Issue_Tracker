const express = require('express');
const router = express.Router();
const issueRoutes = require('./issueRoutes');
const projectRoutes = require('./projectRoutes')
const homepage = require('../controllers/homeController')

router.get('/',  homepage);
router.use('/issues', issueRoutes)
router.use('/project', projectRoutes)


module.exports = router;