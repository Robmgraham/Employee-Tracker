var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_db"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


function start() {
    inquirer.prompt({
            type: "list",
            message: "What would you like to do",
            name: "main",
            choices: ["Add a department", "Add a role", "Add an employee",
                "View departments", "View roles", "View employees",
                "Update employee roles"
            ]

        })
        .then(function(answer) {
                if (answer.main === "Add a department") {
                    departmentAdd();
                } else if (answer.main === "Add a role") {
                    roleAdd();
                } else if (answer.main === "Add an employee") {
                    employeeAdd();
                } else if (answer.main === "View departments") {
                    console.table(([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }])), start();
                } else if (answer.main === "View roles") {
                    console.table(([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }])), start();
                } else if (answer.main === "View employees") {
                    console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']), start();
                } else if (answer.main === "Update employee roles") {
                    updateEmployeeRoles()
                } else {
                    connection.end();
                }

            }

        );
};




function departmentAdd() {
    inquirer
        .prompt([{
            type: "input",
            message: "what department do you want to add",
            name: "department"
        }])
        .then(function(answer) {
            connection.query(
                "INSERT INTO department SET dept_name = ?", [answer.department],

                //function to execute after query is done 
                start()
            )
        })

}
// INSERT INTO employeedb(flavor, price, quantity)
// VALUES("vanilla", 2.50, 100);


function roleAdd() {
    inquirer
        .prompt([{
                type: "input",
                message: "what role do you want to add",
                name: "roleAdd"
            }

        ]).then(function(answer) {
            connection.query(
                "INSERT INTO role SET name = ?", [answer.roleAdd],

                //function to execute after query is done 
                start()
            )
        })
}

function employeeAdd() {
    inquirer
        .prompt([{
                type: "input",
                message: "First name",
                name: "firstName"
            },
            {
                type: "input",
                message: "Last Name",
                name: "lastName"
            },
            {
                type: "input",
                message: "role of Employee",
                name: "employeeRole"
            }
        ]).then(function(answer) {
            connection.query(
                "INSERT INTO employee SET first_name = ?", [answer.firstName],
                "INSERT INTO employee SET last_name = ?", [answer.lastName],
                start()

            )
        })
};

function updateEmployeeRoles() {

}