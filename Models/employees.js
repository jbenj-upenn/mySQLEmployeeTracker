// var connection = require("/dbs/connect.js");
var department = require("./roles.js");

module.exports = class employee {
    // Just like constructor functions, classes can accept arguments
    constructor(id, first_name, last_name, role_id,manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.first_name} ${this.last_name}`);
        console.log(`Role ID: ${this.role_id}`);
        // console.log(`Manager ID: ${this.manager_id}`);
        
    }
};

// module.exports = employees;