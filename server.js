var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",


    password: "root",
    database: "employee_db"
});



inquirer
    .prompt([{
        type: "list",
        name: "main",
        message: "What would you like to do",
        choices: ["Add", "View", "Update"]

    }, ]).then((answers) => {
        // if (answers.choices[0]) {
        //     function Add()

        //     // } else if (answers.choices[1]) {

        // }
        // Add()
    });


function Add() {
    inquierer
        .prompt([{
            type: "list",
            name: "add",
            message: "What would you like to add",
            choices: ["Departments", "roles", "employee"]
        }, ])

}
Add()