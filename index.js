#! usr/bin/env/ node
import chalk from "chalk";
import inquirer from "inquirer";
const userName = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count the Words"
    }
]);
const words = userName.sentence.trim().split(" ");
console.log((chalk.yellow.bold)(words));
console.log((chalk.blue.bold) ` your sentence word counts are ${words.length}`);
