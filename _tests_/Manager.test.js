const Manager = require('../lib/Manager.js');

test('create an employee object', () => {
    let man = new Manager();
    expect(typeof man).toBe('object');
});

test('check name', () => {
    let man = new Manager('Matt','5','123@yahoo.com','mattrick');
    expect(man.name).toBe('Matt');
});

test('check id', () => {
    let man = new Manager('Matt','5','123@yahoo.com','mattrick');
    expect(man.id).toBe('5');
});

test('check email', () => {
    let man = new Manager('Matt','5','123@yahoo.com','mattrick');
    expect(man.email).toBe('123@yahoo.com');
});

test('check school', () => {
    let man = new Manager('Matt','5','123@yahoo.com','mattrick');
    expect(man.getOfficeNumber()).toBe('mattrick');
});

test('check getRole', () => {
    let man = new Manager('Matt','5','123@yahoo.com','mattrick');
    expect(man.getRole()).toBe('Manager');
});