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
            name: 'officeumber',
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
    if (!engineerData.engineer) {
        engineerData.engineer = [];
    }
    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'engineerName',
            message: 'Please enter a name for your Engineer.',
        },
        {
            type: 'type',
            name: 'engineerEmail',
            message: 'Please enter an email for your Engineer.',
        },
        {
            type: 'type',
            name: 'engineerID',
            message: 'Please enter an ID for your Engineer.',
        },
        {
            type: 'type',
            name: 'engineerGithub',
            message: 'Please enter a Github username for your Engineer.',
        },
        {
            type: 'rawlist',
            name: 'engineerOption',
            message: 'Would you like to add another Engineer, an Intern, or finish profile?',
            choices: ['Add an Engineer.', 'Add an Intern', 'Finish Profile Generator']
        }
    ])
    .then (({ engineerOption }) => {
        if (engineerOption === 'Add an Engineer.') {
            return promptEngineer();
        } else if (engineerOption === 'Add an Intern.') {
            return promptIntern();
        }
    });
};

const promptIntern = internData => {
    console.log('Please enter information about your intern!');
    if (!internData.intern) {
        internData.intern = [];
    }
    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'internName',
            message: 'Please enter a name for your Intern.'
        },
        {
            type: 'type',
            name: 'internEmail',
            message: 'Please enter the email for your Intern.',
        },
        {
            type: 'type',
            name: 'internID',
            message: 'Please enter an ID for your Intern.',
        },
        {
            type: 'type',
            name: 'internSchool',
            message: 'Please enter the school where your Intern went.',
        },
        {
            type: 'rawlist',
            name: 'internChoice',
            message: 'Would you like to add another Engineer, an Intern, or finish profile?',
            choices: ['Add an Engineer.', 'Add an Intern', 'Finish Profile Generator']
        }
    ])
    .then (({ internOption }) => {
        if (internOption === 'Add an Engineer.') {
            return promptEngineer();
        } else if (internOption === 'Add an Intern.') {
            return promptIntern();
        }
    });
};


promptManager()
    .then(managerData => {
        return generatePage(managerData);
    })
    .then(engineerData => {
        return generatePage(engineerData);
    })
    .then(internData => {
        return generatePage(internData);
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
