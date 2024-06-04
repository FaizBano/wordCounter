import inquirer from "inquirer";
const userName = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count the Words"
    }
]);
const words = userName.sentence.trim().split(" ");
