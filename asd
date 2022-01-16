const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

// questions for user on deetz for team
const promptManager = () => {

console.log(`
=====================================
Welcome to your project team builder!
=====================================
  `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team managers name?? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('You must input a name for your manager!')
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'employeeID',
            message: 'What is your team managers employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your managers email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number for your manager?'
        },
        {
            type: 'rawlist',
            name: 'confirmOption',
            message: 'Please select what you would like to do.',
            choices: ['Add Engineer.', 'Add Intern.', 'Finish adding members to team.']
        }
    ]);
};

promptManager()
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});