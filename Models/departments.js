// var connection = require("/dbs/connect.js");

module.exports = class department {
    
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }

    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
    }
}

// module.exports = departments;