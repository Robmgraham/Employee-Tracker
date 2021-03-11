

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
                    console.table(([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }])),
                        start();
                } else if (answer.main === "View roles") {
                    console.table(([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }])),
                        start();
                } else if (answer.main === "View employees") {
                    console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']),
                        start();
                } else if (answer.main === "Update employee roles") {
                    updateEmployeeRoles()
                } else {
                    connection.end();
                }

            }

        );
};
