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
                name: 'confirmAddEmplyee',
                message: 'Would you like to add an employee?',
                default: false
            }]).then(function (response){
                if (response.confirmAddEmployee) {
                    questions() //even if Yes, this is writing the file
                }
                else {
                    var HTML = `<!doctype html>
                    <html lang="en">
                      <head>
                        <!-- Required meta tags -->
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                    
                        <!-- Bootstrap CSS -->
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    
                        <title>Team Builder</title>
                      </head>
                      <body>
                        <h1>Team Builder</h1>
                        ${managerHTML}
                        ${engineerHTML}
                        ${internHTML}
                    
                        <!-- Optional JavaScript; choose one of the two! -->
                    
                        <!-- Option 1: Bootstrap Bundle with Popper -->
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                    
                        <!-- Option 2: Separate Popper and Bootstrap JS -->
                        <!--
                        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                        -->
                      </body>
                    </html>`
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

const addManager = (name, id, email,role) => {
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
             <div class="card-header">
               ${newManager.name}
               <h3>Manager</h3>
               <h4>Office #${newManager.officeNumber}</h4>
             </div>
             <div class="card-body">
               <blockquote class="blockquote mb-0">
                 <p>Employee ID: ${newManager.id}.</p>
                 <footer class="blockquote-footer">email: <a href="mailto://${newManager.email}">${newManager.email}</a></footer>
               </blockquote>
             </div>
           </div>`
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
             <div class="card-header">
               ${newEngineer.name}
               <h3>Engineer</h3>
               <h4>GitHub: ${newEngineer.github}</h4>
             </div>
             <div class="card-body">
               <blockquote class="blockquote mb-0">
                 <p>Employee ID: ${newEngineer.id}.</p>
                 <footer class="blockquote-footer">email: <a href="mailto://${newEngineer.email}">${newEngineer.email}</a></footer>
               </blockquote>
             </div>
           </div>`
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
             <div class="card-header">
               ${newIntern.name}
               <h3>Intern</h3>
               <h4>School: ${newIntern.school}</h4>
             </div>
             <div class="card-body">
               <blockquote class="blockquote mb-0">
                 <p>Employee ID: ${newIntern.id}.</p>
                 <footer class="blockquote-footer">email: <a href="mailto://${newIntern.email}">${newIntern.email}</a></footer>
               </blockquote>
             </div>
           </div>`
           addEmployee();
    })
};

questions();