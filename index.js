// TODO: Include packages needed for this application
// to writefile package
const fs = require('fs');
const { generateMarkdown } = require('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'What is your project title?',
  name: 'projectName'
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
  choices: ["Boost Software License 1.0",
    "MIT license",
    "Apache License",
    "The Unlicense",
    "GNU General Public License v3.0"]
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email'
},
{
  type: 'input',
  message: `What is your Github username?`,
  name: 'github'
}];

// TODO: Create a function to write README file
function writeToFile(questions) {
  fs.writeFile('README.md', questions, (err) =>
    err ? console.error(err) : console.log('Done!'))
}

// TODO: Create a function to initialize app
function init() {
  writeToFile()
}

// Function call to initialize app
init();
