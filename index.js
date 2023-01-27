// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {   type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {   type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {   type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {   type: "input",
        message: "What are the usage instructions of your project?",
        name: "usage"
    },
    {   type: "input",
        message: "What are the guidelines to contribute to this project?",
        name: "contributing"
    },
    {   type: "input",
        message: "List any test instructions for your project:",
        name: "test"
    },
    {   type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3","None"]
    },
    {   type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {   type: "input",
        message: "What is your email address?",
        name: "email"
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err)
        : console.log("File written successfully");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("READMEtest.md", generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
