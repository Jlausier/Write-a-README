// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {renderLicenseBadge} = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input', 
    name: 'title',
    message: 'Enter the title of your project:',
    validate: function (input) {
        if (input.trim() === '') {
            return 'This field is required.';
        }
        return true;
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
    validate: function (input) {
        if (input.trim() === '') {
            return 'This field is required.';
        }
        return true;
    }

},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
    default: 'No specific installation at the moment.'
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
    default: 'No specific usage at the moment.'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Enter contribution guidelines:',
    default: 'No specific guidelines at the moment.'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None']
},
{
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
    validate: function (input) {
        if (input.trim() === '') {
            return 'This field is required.';
        }
        return true;
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: function (input) {
        if (input.trim() === '') {
            return 'This field is required.';
        }
        return true;
    }

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            console.error(err)
        } else {
            console.log('README.me generated successfully!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const licenseBadge = renderLicenseBadge(answers.license)
        const readmeTemplate = `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Contributing
    ${answers.contributing} 
    
    ## Tests
    ${answers.tests} 
    
    ## License
    This project is licensed under the ${licenseBadge} License.
    
    ## Questions
    For any questions or feedback, please feel free to contact me:
    - GitHub: [${answers.username}](https://github.com/${answers.username})
    - Email: ${answers.email}
    `;
        writeToFile('README.md', readmeTemplate);
      });
}


// Function call to initialize app
init();
