const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        } else if (managerOption === 'Add an Intern.') {
            promptIntern(); 
        } else if (managerOption === 'Finish Profile Generator') {
            buildTeam();
        }
    })
}

const promptEngineer = () => {
    console.log('Please enter information about your team!');
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
    ])
    .then(engineerData => {
        const { engineerName, engineerID, engineerEmail, engineerGithub } = engineerData;
        const engineer = new Engineer ( engineerName, engineerID, engineerEmail, engineerGithub );

        teamArray.push(engineer)
        promptSelect();
    })
};

const promptIntern = () => {
    console.log('Please enter information about your intern!');
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
    ])
    .then(internData => {
        const { internName, internID, internEmail, internGithub } = internData;
        const intern = new Intern ( internName, internID, internEmail, internGithub );

        teamArray.push(intern)
        promptSelect();
    })
};

const buildTeam = () => {
    return inquirer
    .prompt([
        {
            type: 'rawlist',
            name: 'final',
            message: 'Are you are you added everyone to your team?',
            choices: ['Yes', 'No']
        }
    ])
    .then (({ final }) => {
        if(final === 'No') {
            promptSelect();
        }
    })
    .then(teamArray => {
        return generatePage(teamArray);
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
        console.log(teamArray);
    });
}

promptManager()
    .then (promptSelect)
    

