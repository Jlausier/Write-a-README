// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
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
    
}

// Function call to initialize app
init();
