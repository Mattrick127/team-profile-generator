const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    promptEmployee () {
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
    }
}

module.exports = Employee;