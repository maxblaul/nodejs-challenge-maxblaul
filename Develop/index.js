// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('.utils/generateMarkdown.js');
const { log } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the name of this Github repository?',
        name: 'repo-name',
    },
    {
        type: 'input',
        message: 'What is the title of this assignment?',
        name: 'assignment-title',
    },
    {
        type: 'input',
        message: 'Provide an assignment description.',
        name: 'assignment-description',
    },
    {
        type: 'input',
        message: 'Describe the steps you took to install the project for the Installation section.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Exemplify the utility of your project for the Usage section.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give guidelines to other developers on how they may contribute.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide any tests for your application and how to run them.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Please select a license.',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'The Unlicense' ],
        name: 'license'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.watchFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('Good job! You just made a README.md file')
    });

}

// TODO: Create a function to initialize app
function init() {
    let {
        const userResponses = inquirer.prompt(questions);
    }

}

// Function call to initialize app
init();
