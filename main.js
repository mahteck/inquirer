import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Q1",
        type: "input",
        message: "Enter your Name",
    },
    {
        name: "Q2",
        type: "list",
        message: "Enter your Gender",
        choices: ["Male", "Female"]
    }
]);
console.log(`hello ${answers.Q1} and your gender is ${answers.Q2}`);
//console.log("insha Allah in " + (60 - answers.age) + "years you will be 60 years old.");
