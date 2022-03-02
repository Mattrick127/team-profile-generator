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
        }
    ])
};

const promptTeam = teamData => {
    console.log (`
    ==========================================
    Please select which you would like to add.
    ==========================================
    `);
    if (!teamData.projects) {
        teamData.projects = [];
    }
    return inquirer
    .prompt([
        {
            type: 'rawlist',
            name: 'option',
            message: 'Would you like to add another Engineer, an Intern, or finish profile?',
            choices: ['Add an Engineer.', 'Add an Intern', 'Finish Profile Generator']
        }
    ])
};



promptManager()
    .then(promptTeam)
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
