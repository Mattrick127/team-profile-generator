const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

const employeeID = [];
const teamMembers = [];


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

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

promptManager()
.then(promptEngineer)
.then(pageIndex => {
    return writeFile(pageIndex);
})

.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err)
});