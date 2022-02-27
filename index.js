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
        
    ])
};

const promptEngineer = teamProfileData => {

    console.log (`
    =====================================
    Engineer Adding Phase!
    =====================================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Whats is your Engineers name?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter a name for your engineer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is your engineers id number?',
            validate: engineerID => {
                if (engineerID) {
                    return true;
                } else {
                    console.log('Please enter an ID number for your employee.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineers email address?',
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Please enter an email for your engineer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineers Github username?',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log('Please enter a Github username for your engineer!')
                    return false;
                }
            }
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