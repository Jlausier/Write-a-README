// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const license = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input', 
    name: 'title',
    message: 'Enter the title of your project:',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'

},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Enter contribution guidelines:'
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
    message: 'Enter your GitHub username:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'

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
    This project is licensed under the ${answers.license} License.
    
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
