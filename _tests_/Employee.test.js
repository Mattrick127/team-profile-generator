const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    let emp = new Employee();
    expect(typeof emp).toBe('object');
});

test('check name', () => {
    let emp = new Employee('Matt','5','123@yahoo.com','mattrick');
    expect(emp.name).toBe('Matt');
});

test('check id', () => {
    let emp = new Employee('Matt','5','123@yahoo.com','mattrick');
    expect(emp.id).toBe('5');
});

test('check email', () => {
    let emp = new Employee('Matt','5','123@yahoo.com','mattrick');
    expect(emp.email).toBe('123@yahoo.com');
});

test('check getRole', () => {
    let emp = new Employee('Matt','5','123@yahoo.com','mattrick');
    expect(emp.getRole()).toBe('Employee');
});