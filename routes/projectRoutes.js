const express = require("express");
const router = express.Router();
const { createProject } = require("../controllers/projectController");
const { showProject } = require("../controllers/projectController");
// const createIssue = require("../controllers/issueController");

// router.post("/:id", createIssue);
router.post("/create", createProject);
router.get("/:id", showProject);

module.exports = router;
