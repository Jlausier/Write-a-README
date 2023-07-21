// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { if (!license) {
  return ''; // Return an empty string if there's no license
}

// Define the license badges and their corresponding URLs
const licenseBadges = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  // Add more license badges here as needed
};

// Return the license badge if it exists, otherwise an empty string
return licenseBadges[license] || '';}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Return an empty string if there's no license
  }

  // Define the license URLs
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    // Add more license URLs here as needed
  };

  // Return the license link if it exists, otherwise an empty string
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return an empty string if there's no license
  }

  // Return the license section with the appropriate license name
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  `;
`;
}

module.exports = generateMarkdown;
