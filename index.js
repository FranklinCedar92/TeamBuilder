//const App = require('./lib/App');
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let managerHTML ="";
let engineerHTML = "";
let internHTML = "";
//new App().initializeTeam();
const addEmployee =() => {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add an employee?',
                default: false
            }]).then(function (response){
                console.log(response.confirmAddEmployee)
                if (response.confirmAddEmployee) {
                    questions() //even if Yes, this is writing the file
                }
                else {
                   var HTML= generatePage(managerHTML, engineerHTML, internHTML)
                    console.log(HTML);
                    fs.writeFile("index.html", HTML,(err)=>{
                       if (err) throw err;
                    })
                }
            })
}
// Questions for user input
const questions = () => {
    inquirer.prompt([
        
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
                addManager(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
                break;
            case 'Engineer':
                addEngineer(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
                break;
            case 'Intern':
                addIntern(answers.newEmployeeName, answers.newEmployeeId, answers.newEmployeeEmail, answers.newEmployeeRole);
                break;
        };   
    });
};

const addManager = (name, id, email, role) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerOffice',
            message: `Please enter the manager's office number`
        }
    ])
    .then(response => {
        let newManager = new Manager(name, id, email, response.managerOffice);
          managerHTML += `<div class="card">
              <div class="m_title m_bg-primary">
                <h3>Team Manager</h3>
              </div>
              <div class="info">
                <p>Name: ${newManager.name}</p>
                <p>Email:<a href="mailto://${newManager.email}">${newManager.email}</a></p>
                <p>ID: ${newManager.id}</p>
                <p>Office: ${newManager.officeNumber}</p>
              </div>
            </div>
            `;
           addEmployee();


    })
};

const addEngineer = (name, id, email, role) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerGithub',
            message: `Please enter the engineer's github`
        }
    ])
    .then(response => {
        let newEngineer = new Engineer(name, id, email, response.engineerGithub);
            engineerHTML += `<div class="card">
            <div class="m_title m_bg-primary">
              <h3>Engineer</h3>
            </div>
            <div class="info">
              <p>Name: ${newEngineer.name}</p>
              <p>Email:<a href="mailto://${newEngineer.email}">${newEngineer.email}</a></p>
              <p>ID: ${newEngineer.id}</p>
              <p>GitHub: ${newEngineer.engineerGithub}</p>
            </div>
          </div>
          `;
           addEmployee();
    })
};

const addIntern = (name, id, email, role) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internSchool',
            message: `Please enter the intern's school`
        }
    ])
    .then(response => {
        let newIntern = new Intern(name, id, email, response.internSchool);
            InternHTML += `<div class="card">
              <div class="m_title m_bg-primary">
                <h3>Team Manager</h3>
              </div>
              <div class="info">
                <p>Name: ${newIntern.name}</p>
                <p>Email:<a href="mailto://${newIntern.email}">${newManager.email}</a></p>
                <p>ID: ${newIntern.id}</p>
                <p>School: ${newIntern.internSchool}</p>
              </div>
            </div>
            `;
           addEmployee();
    })
};

questions();