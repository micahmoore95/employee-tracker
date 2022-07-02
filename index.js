const db = require('./config/connection');
const consoleTable = require('console.table');
const inquirer = require('inquirer');


function init() {

    inquirer.prompt([{
        type: 'list',
        name: 'Directory',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }])

    .then(response => {
        switch(response.UserChoice) {
            case "View all departments":
                viewDepartments()
                break;
            case "View all roles":
                viewRoles()
                break;
            case "View all employee":
                viewEmployee()
                break;
            case "Add a department":
                addDepartment()
                break;
            case "Add a roles":
                addRoles()
                break;
            case "Add an employee":
                addEmployee()
                break;
            case "Update an employee role":
                updateRole()
                break;
            default:
                db.end()
                process.exit(0)
        }
    })
};

function viewDepartments() {
    db.query('SELECT * FROM departments;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        init();
    })
}


init();