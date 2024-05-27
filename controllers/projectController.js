const Issue = require("../models//Issue");
const Project = require("../models/Project");

const createProject = async (req, res) => {
  console.log(req.body);
  try {
    Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    console.log(Project);
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

const showProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id).populate({
      path: "issues",
    });
    if (project) {
      return res.render("project", {
        title: "Project",
        project,
      });
    }
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

module.exports = { createProject, showProject };
