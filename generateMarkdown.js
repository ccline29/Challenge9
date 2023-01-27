// Function to render license badge
function renderLicenseBadge(license) {
    let badge = "";
      if (license == "MIT") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        } else if (license == "Apache 2.0") {
        badge = "[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)";
        } else if (license == "GPL 3.0") {
        badge = "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-green.svg)";
        } else if (license = "BSD 3") {
        badge = "[![License BSD 3](https://img.shields.io/badge/License-BSD%203-Clause-blue.svg)";
        } else if (license == "None") {
          badge = "";
        }
        return badge;
  };
    
  // Function to create license section in README
  function renderLicenseSection(license) {
    if(license !== "None") {
      return `## License
      This application is under the ${license} license.`
    } return "";
  }
  
  // Function to create text in README
  function generateMarkdown(data) {
    return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage of Application](#usage-of-application)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  To install necessary dependecies, run the following command:

  ${data.installation}
  
  ## Usage of Application

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  
  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  ${data.test}

  ## License
  ${renderLicenseBadge[data.license]}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
}.
  You can find more of my work at [${data.GitHub}](https://github.com/${data.GitHub}/).

  `;
  }
  
  module.exports = generateMarkdown;