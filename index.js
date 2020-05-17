require("dotenv").config()
const inquirer = require('inquirer');
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown")
var department = require("./models/departments.js");
var employee = require("./models/employees.js");
var role = require("./models/roles.js")

const questions = [
{
    type: "list",
    name:"companyDB",
    message: "What would you like to do?",
    choices: [
        "View all departments",
        "View all employees",
        "View all roles",
        "Add department(s)",
        "Add employee(s)",
        "Add role(s)",
        "Update employee role"
    ]
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("");
      });
}

const askQuestions = async (questions) => {
    const answers = await inquirer.prompt(questions).catch(err => err)
    // console.log(answers);
    return answers;
}

const init = async () => {
   const userAnswers = await askQuestions(questions);
//    console.log(userAnswers);
   writeToFile("exampleREADME.md", userAnswers)
        }

init();
