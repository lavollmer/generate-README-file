# generate-README-File

## Project Description

This project involved using inquirer to make a README generator for the end user. A user is prompted with a series of questions which then is used to write a README file in the project. The project's technical requirements involved using node.js, inquirer, callback functions, fs.writeFile and much more. 

The motivation for the project was to create a README file generator to automate/streamline that aspect of coding for the end user. 

Things that could be improved are adding more questions to make it easier for the user to fill in the information (not to forget anything). An example would be in the project description, instead of asking for a general project description, you could break it down to asking for technical requirements, project information, things you would improve in the project. All these things would be put into the section of project description. It would be a more detailed approach to creating a README file.


## Usage

Examples of use include the end user creating a README file for any project he/she is working on.

Video Submission:

Screenshots:

## Credits

This project was in completion with the U of MN Bootcamp Fall 2023. 

Contributors include AskBCS, tutoring services, and Arthur Henningfield (classmate).

AskBCS (#285142) helped with an error with my const generateMarkdown = require(“../utils/generateMarkdown”);. They suggested updating the file path. 

Tutoring services helped with the general concept of git bash and saving my file to my repo instead of where the starter code was located (it was denying permission).

Arthur Henningfield (classmate) helped with where to find markdown license badges, the logic of module.exports (how it works), and getting the README to generate correctly. Arthur Henningfield recommended removing const data= JSON.stringify(answers). He suggested also writing this writeToFile(generateMarkdown(answers)).


## License

None