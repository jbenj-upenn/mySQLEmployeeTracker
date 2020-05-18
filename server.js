require("dotenv").config()

const inquirer = require('inquirer');
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown")
var department = require("./Models/departments.js");
var employee = require("./Models/employees.js");
var role = require("./Models/roles.js");

var mysql = require("mysql");

// var dRE = require("dbs/dRE.sql");
// var seed = require("dbs/seed.sql");

// const connection = require("/dbs/connect.js");

// var firstQs = require("firstQs.js");

var connection = mysql.createConnection({
//     host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.DB_PASS,
    database: "company_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

// const questions = [
// {
//     type: "list",
//     name:"companyDB",
//     message: "What would you like to do?",
//     choices: [
//         "View all departments",
//         "View all employees",
//         "View all roles",
//         "Add department(s)",
//         "Add employee(s)",
//         "Add role(s)",
//         "Update employee role"
//     ]
// },
// ];

function start() {
    inquirer
      .prompt({
        name: "initialize",
        type: "list",
        message: "What would you like to do in the Database?",
        choices: ["View all departments",
                "View all employees",
                "View all roles",
                "Add department(s)",
                "Add employee(s)",
                "Add role(s)",
                "Update employee role"]
      })

      .then(function(answer) {
        // go to user's choice
        if (answer.initialize === "View all departments") {
          viewDepts();
        }else if(answer.initialize === "View all employees") {
          viewEmps();
        } else if(answer.initialize === "View all roles") {
          viewRoles();
        } else if(answer.initialize === "Add department(s)") {
          addDepts();
        } else if(answer.initialize === "Add employee(s)") {
          addEmps();
        } else if(answer.initialize === "Add role(s)") {
          addRoles();
        } else if (answer.initialize === "Update employee role") {
            updateRoles();
        } else {
          connection.end();
        }
      });
  }
  
function viewDepts (){
        // user chooses the department s/he wants to view
        inquirer
          .prompt({
              name: "deptChoices",
              type: "list",
              message: "Which department would you like to view?",
              choices: [
                  "Sales",
                  "Engineering",
                  "Finance",
                  "Legal",
              ]
            });
        }

        connection.query(`SELECT * FROM departments`), (err,results,field) =>{
            if (err){ throw(err)}
            console.log(results)
        }
    
function viewEmps (){
        // user chooses the department s/he wants to view
        inquirer
          .prompt({
              name: "empNames",
              type: "input",
              message: "Which employee would you like to view?",
            });

            //if/then to view the various deparments
            
    connection.query(`SELECT * FROM employees`), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }
}

function viewRoles (){
    inquirer
          .prompt({
              name: "roles",
              type: "list",
              message: "Which role would you like to view?",
              choices: [
                  "Head of Sales",
                  "Salesperson",
                  "Lead Engineer",
                  "Software Engineer",
                  "Account Manager",
                  "Accountant",
                  "Legal Team Lead", 
                  "Lawyer"
              ]
            });
        }
    connection.query(`SELECT * FROM roles`), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }

function addDepts (){
    connection.query(`SELECT * FROM `), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }
}
function addEmps (){
    connection.query(`SELECT * FROM roles`), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }
}
function addRoles (){
    connection.query(`SELECT * FROM roles`), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }
}
function updateRoles (){
    connection.query(`SELECT * FROM roles`), (err,results,field) =>{
        if (err){ throw(err)}
        console.log(results)
    }
}
//   function viewDepts() 




//   function viewEmps() 
//   function viewRoless() 
//   function addDepts() 
//   function addEmps() 
//   function addRoles() 
//   function updateRoles() 
// //   start();

 


//   // function to handle posting new items up for auction
//   function postAuction() {
//     // prompt for info about the item being put up for auction
//     inquirer
//       .prompt([
//         {
//           name: "item",
//           type: "input",
//           message: "What is the item you would like to submit?"
//         },
//         {
//           name: "category",
//           type: "input",
//           message: "What category would you like to place your auction in?"
//         },
//         {
//           name: "startingBid",
//           type: "input",
//           message: "What would you like your starting bid to be?",
//           validate: function(value) {
//             if (isNaN(value) === false) {
//               return true;
//             }
//             return false;
//           }
//         }
//       ])
//       .then(function(answer) {
//         // when finished prompting, insert a new item into the db with that info
//         connection.query(
//           "INSERT INTO auctions SET ?",
//           {
//             item_name: answer.item,
//             category: answer.category,
//             starting_bid: answer.startingBid || 0,
//             highest_bid: answer.startingBid || 0
//           },
//           function(err) {
//             if (err) throw err;
//             console.log("Your auction was created successfully!");
//             // re-prompt the user for if they want to bid or post
//             start();
//           }
//         );
//       });
//   }
  
//   function bidAuction() {
//     // query the database for all items being auctioned
//     connection.query("SELECT * FROM auctions", function(err, results) {
//       if (err) throw err;
//       // once you have the items, prompt the user for which they'd like to bid on
//       inquirer
//         .prompt([
//           {
//             name: "choice",
//             type: "rawlist",
//             choices: function() {
//               var choiceArray = [];
//               for (var i = 0; i < results.length; i++) {
//                 choiceArray.push(results[i].item_name);
//               }
//               return choiceArray;
//             },
//             message: "What auction would you like to place a bid in?"
//           },
//           {
//             name: "bid",
//             type: "input",
//             message: "How much would you like to bid?"
//           }
//         ])
//         .then(function(answer) {
//           // get the information of the chosen item
//           var chosenItem;
//           for (var i = 0; i < results.length; i++) {
//             if (results[i].item_name === answer.choice) {
//               chosenItem = results[i];
//             }
//           }
  
//           // determine if bid was high enough
//           if (chosenItem.highest_bid < parseInt(answer.bid)) {
//             // bid was high enough, so update db, let the user know, and start over
//             connection.query(
//               "UPDATE auctions SET ? WHERE ?",
//               [
//                 {
//                   highest_bid: answer.bid
//                 },
//                 {
//                   id: chosenItem.id
//                 }
//               ],
//               function(error) {
//                 if (error) throw err;
//                 console.log("Bid placed successfully!");
//                 start();
//               }
//             );
//           }
//           else {
//             // bid wasn't high enough, so apologize and start over
//             console.log("Your bid was too low. Try again...");
//             start();
//           }
//         });
//     });
//   }
  
// // function writeToFile(fileName, data) {
// //     fs.writeFile(fileName, generateMarkdown(data), function(err) {
// //         if (err) {
// //           return console.log(err);
// //         }
// //         console.log("");
// //       });
// // }

// // const askQuestions = async (questions) => {
// //     const answers = await inquirer.prompt(questions).catch(err => err)
// //     // console.log(answers);
// //     return answers;
// // }

// // const init = async () => {
// //    const userAnswers = await askQuestions(questions);
// // //    console.log(userAnswers);
// //    writeToFile("exampleREADME.md", userAnswers)
// //         }

// init();
