const Intern = require('../lib/Intern.js');

test('create an employee object', () => {
    let int = new Intern();
    expect(typeof int).toBe('object');
});

test('check name', () => {
    let int = new Intern('Matt','5','123@yahoo.com','mattrick');
    expect(int.name).toBe('Matt');
});

test('check id', () => {
    let int = new Intern('Matt','5','123@yahoo.com','mattrick');
    expect(int.id).toBe('5');
});

test('check email', () => {
    let int = new Intern('Matt','5','123@yahoo.com','mattrick');
    expect(int.email).toBe('123@yahoo.com');
});

test('check school', () => {
    let int = new Intern('Matt','5','123@yahoo.com','mattrick');
    expect(int.getSchool()).toBe('mattrick');
});

test('check getRole', () => {
    let int = new Intern('Matt','5','123@yahoo.com','mattrick');
    expect(int.getRole()).toBe('Intern');
});