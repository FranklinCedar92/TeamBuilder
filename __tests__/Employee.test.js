const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test("checking employee's name", () => {
    var employeeName = "Franklin";
    const testEmployee = new Employee(employeeName);
    expect(testEmployee.name).toBe(employeeName)

});


test("checking employee's Id", () => {
    var employeeName = "Franklin";
    var employeeId ="E1234"
    const testEmployee = new Employee(employeeName,employeeId);
    expect(testEmployee.id).toBe(employeeId)

});

test("checking employee's email", () => {
    var employeeName = "Franklin";
    var employeeId ="E1234"
    var employeeEmail = "franklin@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.email).toBe(employeeEmail)

});


test("checking employee's getName", () => {
    var employeeName = "Franklin";
    const testEmployee = new Employee(employeeName);
    expect(testEmployee.getName()).toBe(employeeName)

});


test("checking employee's getId", () => {
    var employeeName = "Franklin";
    var employeeId ="E1234"
    const testEmployee = new Employee(employeeName,employeeId);
    expect(testEmployee.getId()).toBe(employeeId)

});

test("checking employee's getEmail", () => {
    var employeeName = "Franklin";
    var employeeId ="E1234"
    var employeeEmail = "franklin@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.getEmail()).toBe(employeeEmail)

});

test("checking employee's getRole", () => {
    var employeeName = "Franklin";
    var employeeId ="E1234"
    var employeeEmail = "franklin@gmail.com"
    const testEmployee = new Employee(employeeName,employeeId,employeeEmail);
    expect(testEmployee.getRole()).toBe("Employee")

});