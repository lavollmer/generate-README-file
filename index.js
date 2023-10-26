// TODO: Include packages needed for this application
const fs = require('fs');

//inquirer package
const inquirer = require('inquirer');

// use generateMarkdown export
const { generateMarkdown } = require('./utils/generateMarkdown');

// questions Array created with required questions
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'What is your installation instructions?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is your usage information?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What is your contribution guidelines?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'What is your test instructions?',
    name: 'test'
  },
  {
    type: 'list',
    message: 'What is your license?',
    name: 'license',
    choices: ["Boost Software License 1.0", "MIT license", "Apache License", "The Unlicense", "GNU General Public License v3.0"]
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
  }]

//store inquirer prompt to get answers in function prompt
function prompt() {
  return inquirer.prompt(questions).then(answers => {
    console.log(answers);
    return answers;
  })
}

// TODO: Create a function to write README file
// writeFile to README.md using answers
function writeToFile(answers) {
  fs.writeFile('README.md', answers, (err) =>
    err ? console.error(err) : console.log('Finished!'))
}

// TODO: Create a function to initialize app
// Use answers in generateMarkdown function to writeToFile
function init() {
  return prompt().then(answers => {
    writeToFile(generateMarkdown(answers))
  })
}

// Function call to initialize app
init();
