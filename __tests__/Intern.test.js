const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test("checking Intern's name", () => {
    var internName = "Franklin";
    const testIntern = new Intern(internName);
    expect(testIntern.name).toBe(internName)

});


test("checking Intern's Id", () => {
    var internName = "Franklin";
    var internId ="E1234"
    const testIntern = new Intern(internName, internId);
    expect(testIntern.id).toBe(internId)

});

test("checking Intern's email", () => {
    var internName = "Franklin";
    var internId ="E1234"
    var internEmail = "franklin@gmail.com"
    const testIntern = new Intern(internName, internId, internEmail);
    expect(testIntern.email).toBe(internEmail)

});


test("checking Intern's getName", () => {
    var internName = "Franklin";
    const testIntern = new Intern(internName);
    expect(testIntern.getName()).toBe(internName)

});


test("checking Intern's getId", () => {
    var internName = "Franklin";
    var internId ="E1234"
    const testIntern = new Intern(internName, internId);
    expect(testIntern.getId()).toBe(internId)

});

test("checking Intern's getEmail", () => {
    var internName = "Franklin";
    var internId ="E1234"
    var internEmail = "franklin@gmail.com"
    const testIntern = new Intern(internName, internId, internEmail);
    expect(testIntern.getEmail()).toBe(internEmail)

});

test("checking Intern's getRole", () => {
    var internName = "Franklin";
    var internId ="E1234"
    var internEmail = "franklin@gmail.com"
    const testIntern = new Intern(internName, internId, internEmail);
    expect(testIntern.getRole()).toBe("Intern")

});