// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (license === "Boost Software License 1.0") {
    console.log("[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
  } else if (license === "MIT License") {
    console.log("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else if (license === "Apache License") {
    console.log("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
  } else if (license === "The Unilicense") {
    console.log("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
  } else if (license === "GNU General Public License v3.0") {
    console.log("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
  } else {
    console.log("");
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Boost Software License 1.0") {
    console.log("[Boost Software License] (https://www.boost.org/users/license.html)");
  } else if (license === "MIT License") {
    console.log("[MIT License] https://opensource.org/license/mit/");
  } else if (license === "Apache License") {
    console.log("[Apache License] https://www.apache.org/licenses/LICENSE-2.0");
  } else if (license === "The Unilicense") {
    console.log("[Unilicense License] https://choosealicense.com/licenses/unlicense/");
  } else if (license === "GNU General Public License v3.0") {
    console.log("[GNU General Public License v3.0] https://www.gnu.org/licenses/gpl-3.0.en.html");
  } else {
    console.log("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license)
  renderLicenseLink(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.projectName}
  ## Project Description
  ${questions.description}

  ## Table of Contents

  ## Installation
 ${questions.installation}

  ## Usage
  ${questions.usage}

  ## License
    ${questions.license}
    ${renderLicenseSection(license)}

  ## Contribution
   ${questions.contribution}

   ## Tests
     ${questions.test}

     ## Questions
     For further questions, please reach out to the email or github below. 
     ${questions.email}
      ${questions.github}
`;
}

module.exports = { generateMarkdown };
