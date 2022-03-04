const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

let teamArray = [];

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
    .then(managerData => {
        const { managerName, managerID, managerEmail, officeNumber} = managerData;
        const manager = new Manager (managerName, managerID, managerEmail, officeNumber);

        teamArray.push(manager)
        console.log(manager);
    })
};

const promptSelect = () =>{
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'managerOption',
            message: 'Would you like to add an engineer, an intern, or complete your profile?',
            choices: ['Add an Engineer.', 'Add an Intern.', 'Finish Profile Generator']
        }
    ])
    .then (({ managerOption }) => {
        if(managerOption === 'Add an Engineer.') {
            promptEngineer();
        } else {
        (managerOption === 'Add an Intern.') 
            promptIntern();
        
        }
    })
}

const promptEngineer = () => {
    console.log('Please enter information about your team!');
    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'engineerGithub',
            message: 'Please enter a Github username for your Engineer.',
        },
    ])
};

const promptIntern = () => {
    console.log('Please enter information about your intern!');
    return inquirer
    .prompt([
        {
            type: 'type',
            name: 'internSchool',
            message: 'Please enter the school where your Intern went.',
        },
    ])
};


promptManager()
    .then (promptSelect);
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
