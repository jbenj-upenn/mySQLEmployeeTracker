var connection = require("/dbs/companyStats.js");
var department = require("/departments.js");

class role {
    // Just like constructor functions, classes can accept arguments
    constructor(id, title, salary, department_id) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Department ID: ${this.department_id}`);
    }
}

module.exports = roles;
