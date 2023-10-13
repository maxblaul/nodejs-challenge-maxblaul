const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/license-$%7Blicense%7D-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    The project is covered under the ${license} license. To find out more, visit opensource.org or creativecommons.org`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Contents
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Author](#username)
  



  
  
  ${data.title}
  
 ## Description 
  ${data.description}



  ## Installation
  ${data.installation}

 
 
 
  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

 
  ## Contributing
  ${data.contributing}

 
  ## Tests 
  ${data.tests}
 
 ## Questions
 If you have any questions feel free to reach out!
 Github: https://github.com/${data.username}
 Email: ${data.email}
 
 ## Author 
  ${data.myname}  

 ## Repository Link

 https://github.com/${data.repo}

`;
}

module.exports = generateMarkdown;
