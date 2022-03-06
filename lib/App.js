const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Team() {
    this.engineers = [];
    this.interns = [];
}

Team.prototype.initializeTeam = function() {
   // this.engineers.push(new Engineer({engName}, {engID}, {engEmail}, {engGitHub}));
    inquirer
    .prompt(
        {
        type: 'text',
        name: 'managerName',
        message: "Enter the team manager's name"
    },
    {
        type: 'text',
        name: 'managerID',
        message: "What is the manager's employee ID?"
    },
    {
        type: 'text',
        name: 'managerEmail',
        message: "Enter the manager's email"
    },
    {
        type: 'text',
        name: 'managerOffice',
        message: "What is the manager's office number?"
    }
    )  
};

Team.prototype.addEmployee = function() {
    inquirer
    .prompt({
        type: 'list',
        name: 'employee',
        message: 'Who would you like to add to your team?',
        choices: ['Engineer', 'Intern']
    })
    .then(({ employee }) => {
        if (employee === 'Engineer') {
            const addEngineer = engData => {
                if (!engData.people) {
                    engData.people = [];
                }
                console.log(`
                ================
                Add New Engineer
                ================
                `);
            
                inquirer
                .prompt({
                    type: 'text',
                    name: 'engName',
                    message: "Enter the engineer's name"
                },
                {
                    type: 'text',
                    name: 'engId',
                    message: "What is the engineer's ID?"
                },
                {
                    type: 'text',
                    name: 'engEmail',
                    message: "Enter the engineer's email"
                },
                {
                    type: 'text',
                    name: 'engGitHub',
                    message: "What is the engineer's GitHub username?"
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEng',
                    message: 'Would you like to add another engineer?',
                    default: false
                })
                .then(engData => {
                    engData.people.push(new Engineer({engName}, {engID}, {engEmail}, {engGitHub}));
                    if (engData.confirmAddEng) {
                      return addEngineer(engData);
                    } else {
                      addEmployee();
                    }
                });
               
            }
            addEngineer();
        }

        if (employee === 'Intern') {
            const addIntern = intData => {
                if (!intData.people) {
                    intData.people = [];
                }
                console.log(`
                ================
                Add New Intern
                ================
                `);
            
                inquirer
                .prompt({
                    type: 'text',
                    name: 'intName',
                    message: "Enter the intern's name"
                },
                {
                    type: 'text',
                    name: 'intId',
                    message: "What is the intern's ID?"
                },
                {
                    type: 'text',
                    name: 'intEmail',
                    message: "Enter the intern's email"
                },
                {
                    type: 'text',
                    name: 'intGitHub',
                    message: "What is the intern's GitHub username?"
                },
                {
                    type: 'confirm',
                    name: 'confirmAddInt',
                    message: 'Would you like to add another intern?',
                    default: false
                })
                .then(intData => {
                    intData.people.push(new Intern({intName}, {intID}, {intEmail}, {intGitHub}));
                    if (engData.confirmAddInt) {
                      return addIntern(intData);
                    } else {
                      addEmployee(); // 
                    }
                });
            }
            addIntern();
        }
    })
}

module.exports = Team;