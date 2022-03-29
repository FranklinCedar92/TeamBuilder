//const App = require('./lib/App');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

//new App().initializeTeam();

// Questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmplyee',
            message: 'Would you like to add an employee?',
            default: false
        },
        {
            type: 'input',
            name: 'newEmployeeName',
            message: `Please enter the employee's name`
        },
        {
            type: 'input',
            name: 'newEmployeeId',
            message: `Please enter the employee's id`
        },
        {
            type: 'input',
            name: 'newEmployeeEmail',
            message: `Please enter the employee's email`
        },
        {
            type: 'list',
            name: 'newEmployeeRole',
            message: `What is the employee's role?`,
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then((answers) => {
        // leads to other prompts
        switch (answers.newEmployeeRole) {
            case "Manager":
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
        };   
    });
};

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerOffice',
            message: `Please enter the manager's office number`
        }
    ])
};

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerGithub',
            message: `Please enter the engineer's github`
        }
    ])
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internSchool',
            message: `Please enter the intern's school`
        }
    ])
};

questions();