const Engineer = require('../lib/Engineer.js');

test('creates an engineer', () => {
    let eng = new Engineer();
    expect(typeof eng).toBe('object');
});

test('check name', () => {
    let eng = new Engineer('Matt','5','123@yahoo.com','mattrick');
    expect(eng.name).toBe('Matt');
});

test('check id', () => {
    let eng = new Engineer('Matt','5','123@yahoo.com','mattrick');
    expect(eng.id).toBe('5');
});

test('check email', () => {
    let eng = new Engineer('Matt','5','123@yahoo.com','mattrick');
    expect(eng.email).toBe('123@yahoo.com');
});

test('check github', () => {
    let eng = new Engineer('Matt','5','123@yahoo.com','mattrick');
    expect(eng.getGithub()).toBe('mattrick');
});

test('check getRole', () => {
    let eng = new Engineer('Matt','5','123@yahoo.com','mattrick');
    expect(eng.getRole()).toBe('Engineer');
});