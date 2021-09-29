// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
    name: "description",
  },
  {
    type: "input",
    message: "Table of contents for longer projects.",
    name: "contents",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description.",
    name: "install",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    name: "instructions",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "collaborators",
  },
  {
    type: "input",
    message: "What is the license you would like to use for this project?",
    name: "license",
  },
  {
    type: "input",
    message: "What languages did you use for this project?",
    name: "badges",
  },
  {
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "features",
  },
  {
    type: "input",
    message: "Instructions for how to contribute?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How can devs test this app?",
    name: "tests",
  },
];

inquirer
  .prompt(questions)
  .then((responses) => {
    console.log(responses);

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("You're README.md has been created!");
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
