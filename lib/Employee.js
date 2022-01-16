

class Employee {
    constructor(name, ... email) {
        this.name = name;
        this.id = Math.floor(Math.random() * 10 + 20);
        this.email = email;
    }
}

module.exports = Employee;