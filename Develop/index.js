// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const generateMarkdown = require('./utils/generateMarkdown.js');
const { log } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'myname',
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },    
    {
        type: 'input',
        message: 'What is the name of this Github repository?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What is the title of this assignment?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide an assignment description.',
        name: 'description',
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
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Universal'],
        name: 'license',
    }


];

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    
     inquirer.prompt(questions).then((response) => {
        console.log("Generating the README");
        writeToFile('README.md', generateMarkdown({...response}))
     })
    

}

// Function call to initialize app
init();
