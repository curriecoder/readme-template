const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api.js");
const util = require("util");

// Questions to user for prompt
const questions = [
  {
    type: "input",
    message: "Enter your GitHub user name:",
    name: "username",
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
  },
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
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    name: "collaborators",
  },
  {
    type: "list",
    message: "What is the license you would like to use for this project?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "MIT License",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "What languages did you use for this project?(for badges)",
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
    name: "contributing",
  },
  {
    type: "input",
    message: "How can devs test this app?",
    name: "tests",
  },
];

// function for writing file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("You're README.md has been created!");
  });
}

const writeFileAsync = util.promisify(writeToFile);

// Function for initialization
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log("Responses received! Retrieving GitHub user info");

    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user info: ", userInfo);

    console.log("Generating your README.md");
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    await writeFileAsync(userResponses.title, markdown);
    
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
