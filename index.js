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
        }
        
    ])
};

const promptTeam = teamData => {
    console.log('Please enter information about your team!');

    if(!teamData.profile) {
        teamData.profile = [];
    }
    return inquirer
    .prompt([
        {
            type: 'rawlist',
            name: 'name',
            message: 'What is your favorite color?',
            choices: ['Black', 'Green', 'Red', 'Orange', 'Yellow', 'Blue', 'Indigo', 'Purple', 'White']
        }
    ])
    .then(profileData => {
        teamData.profile.push(profileData);
        if (profileData.confirmAddProject) {
            return promptTeam(teamData);
        } else {
            return teamData;
        }
    });
}

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