const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptManager = () => {
    console.log(`
    =====================================
    Welcome to your project team builder!
    =====================================
      `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your team managers name?? (Required)'
        },
        {
            type: 'number',
            name: 'managerID',
            message: 'What is your team managers employee ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number for your manager?'
        },
        {
            type: 'rawlist',
            name: 'managerOption',
            message: 'Would you like to add an engineer, an intern, or complete your profile?',
            choices: ['Add an Engineer.', 'Add an Intern.', 'Finish Profile Generator']
        }
    ])
};



promptManager()
    .then(teamData => {
        return generatePage(teamData);
    })
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
