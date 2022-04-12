const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test("checking manager's name", () => {
    var managerName = "Franklin";
    const testManager = new Manager(managerName);
    expect(testManager.name).toBe(managerName)

});


test("checking manager's Id", () => {
    var managerName = "Franklin";
    var managerId ="E1234"
    const testManager = new Manager(managerName, managerId);
    expect(testManager.id).toBe(managerId)

});

test("checking manager's email", () => {
    var managerName = "Franklin";
    var managerId ="E1234"
    var managerEmail = "franklin@gmail.com"
    const testManager = new Manager(managerName, managerId, managerEmail);
    expect(testManager.email).toBe(managerEmail)

});


test("checking manager's getName", () => {
    var managerName = "Franklin";
    const testManager = new Manager(managerName);
    expect(testManager.getName()).toBe(managerName)

});


test("checking manager's getId", () => {
    var managerName = "Franklin";
    var managerId ="E1234"
    const testManager = new Manager(managerName, managerId);
    expect(testManager.getId()).toBe(managerId)

});

test("checking manager's getEmail", () => {
    var managerName = "Franklin";
    var managerId ="E1234"
    var managerEmail = "franklin@gmail.com"
    const testManager = new Manager(managerName, managerId, managerEmail);
    expect(testManager.getEmail()).toBe(managerEmail)

});

test("checking manager's getRole", () => {
    var managerName = "Franklin";
    var managerId ="E1234"
    var managerEmail = "franklin@gmail.com"
    const testManager = new Manager(managerName, managerId, managerEmail);
    expect(testManager.getRole()).toBe("Manager")

});