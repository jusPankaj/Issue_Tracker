const Project = require("../models/Project");

const homepage = async (req, res) => {
  try {
    console.log("Inside homepage");
    let projects = await Project.find({}).sort("-createdAt");

    return res.render("homepage", {
      title: "Issue Tracker | Home",
      projects,
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};

module.exports = homepage;
