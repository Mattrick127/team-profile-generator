const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
let managers = [];
let engineers = [];
let interns = [];
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
    ])
};

promptManager()
    .then(function(answers){

        let newManager = new Manager(answers.managerName,answers.managerID,answers.managerEmail,answers.officeNumber);
        answers.managers.push(newManager)
});

    // .then(generatorData => {
    //     return generatePage(generatorData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
