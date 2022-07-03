const db = require('./config/connection');
const consoleTable = require('console.table');
const inquirer = require('inquirer');


function init() {

    inquirer.prompt([{
        type: 'list',
        name: 'Directory',
        message: 'What would you like to do?',
        choices: [{ name:"View all departments"}, {name: "View all roles"}, {name: "View all employees"}, {name: "Add a department"}, {name: "Add a role"}, {name: "Add an employee"}, {name: "Update an employee role"}]
    }])
    return response.Directory

    .then(response => {
        switch(response.Directory) {
            case "View all departments":
                viewDepartments()
                break;
            case "View all roles":
                viewRoles()
                break;
            case "View all employees":
                viewEmployees()
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
};

function viewRoles() {
    db.query('SELECT * FROM roles;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        init();
    })
};

function viewEmployees() {
    db.query('SELECT * FROM employees;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        init();
    })
};

function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter department name',
        name: 'departmentName'
    }])
    .then(response => {
        db.query('INSERT INTO departments (department_name) VALUES(?);',
        response.departmentName,
         function(err, data){
            if(err)
            throw err;
            console.table(data)
            init();
        })
    })
};

function addRoles() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter salary',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'Enter department ID',
        name: 'departmentId'
    },
])
    .then(response => {
        db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?);',
        [response.title, response.salary, response.departmentId],
         function(err, data){
            if(err)
            throw err;
            console.table(data)
            init();
        })
    })
};

function addEmployee() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter first name',
        name: 'first'
    },
    {
        type: 'input',
        message: 'Enter last name',
        name: 'last'
    },
    {
        type: 'input',
        message: 'Enter role ID',
        name: 'roleId'
    },
    {
        type: 'input',
        message: 'Enter manager ID',
        name: 'managerId'
    },
])
    .then(response => {
        db.query('INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?);',
        [response.first, response.last, response.roleId, response.managerId],
         function(err, data){
            if(err)
            throw err;
            console.table(data)
            init();
        })
    })
} 




init();