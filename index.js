const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('.index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};
module.exports = { writeFile };

const promptQuestions = () => {
    return inquirer.prompt([Employee, Manager, Engineer, Intern])
}

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

promptQuestions()
.then(teamData => {
    return generateSite(teamData);
})
.then(pageIndex => {
    return writeFile(pageIndex);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err)
});