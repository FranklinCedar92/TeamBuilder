const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test("checking engineer's name", () => {
    var engineerName = "Franklin";
    const testEngineer = new Engineer(engineerName);
    expect(testEngineer.name).toBe(engineerName)

});


test("checking engineer's Id", () => {
    var engineerName = "Franklin";
    var engineerId ="E1234"
    const testEngineer = new Engineer(engineerName,engineerId);
    expect(testEngineer.id).toBe(engineerId)

});

test("checking engineer's email", () => {
    var engineerName = "Franklin";
    var engineerId ="E1234"
    var engineerEmail = "franklin@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.email).toBe(engineerEmail)

});


test("checking engineer's getName", () => {
    var engineerName = "Franklin";
    const testEngineer = new Engineer(engineerName);
    expect(testEngineer.getName()).toBe(engineerName)

});


test("checking engineer's getId", () => {
    var engineerName = "Franklin";
    var engineerId ="E1234"
    const testEngineer = new Engineer(engineerName,engineerId);
    expect(testEngineer.getId()).toBe(engineerId)

});

test("checking engineer's getEmail", () => {
    var engineerName = "Franklin";
    var engineerId ="E1234"
    var engineerEmail = "franklin@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.getEmail()).toBe(engineerEmail)

});

test("checking engineer's getRole", () => {
    var engineerName = "Franklin";
    var engineerId ="E1234"
    var engineerEmail = "franklin@gmail.com"
    const testEngineer = new Engineer(engineerName,engineerId,engineerEmail);
    expect(testEngineer.getRole()).toBe("Engineer")

});