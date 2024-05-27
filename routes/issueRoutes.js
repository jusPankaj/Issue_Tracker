const express = require("express");
const router = express.Router();
const createIssue = require("../controllers/issueController");

router.post("/:id", createIssue);

module.exports = router;
