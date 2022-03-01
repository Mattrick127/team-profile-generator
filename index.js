const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


const promptManager = managerData => {

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
            name: 'managerOption',
            message: 'Would you like to add an engineer, an intern, or complete your profile?',
            choices: ['Add an Engineer.', 'Add an Intern.', 'Finish Profile Generator']
        }
        
    ])
    .then (({ managerOption }) => {
        if (managerOption === 'Add an Engineer.') {
            return promptEngineer();
        } else if (managerOption === 'Add an Intern.') {
            return promptIntern();
        }
    });
};


const promptEngineer = engineerData => {
    console.log('Please enter information about your team!');

    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'name',
            message: 'Please enter a name for your Engineer.',
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter an email for your Engineer.',
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter an ID for your Engineer.',
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter a Github username for your Engineer.',
        }
    ])
};

const promptIntern = internData => {
    console.log('Please enter information about your intern!');
    
    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'name',
            message: 'Please enter a name for your Intern.'
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter the email for your Intern.',
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter an ID for your Intern.',
        },
        {
            type: 'type',
            name: 'name',
            message: 'Please enter the school where your Intern went.',
        }
    ])
};


promptManager()
    .then(managerData => {
        return generatePage(managerData);
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
