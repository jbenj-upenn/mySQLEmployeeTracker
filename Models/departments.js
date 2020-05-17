// var connection = require("/dbs/companyStats.js");

class department {
    
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