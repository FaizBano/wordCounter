#! usr/bin/env/ node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green.bold.underline("\n\t WELCOME TO WORD AND LETTER COUNTER"));
let myloop = true;
while (myloop) {
    const userIput = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Pleae Enter Your Paragraph",
        },
        {
            name: "ask",
            type: "list",
            message: " Enter your Choice",
            choices: ["1. Word Count", "2. letter Count", "3. Both word and sentence"],
        }
    ]);
    let { sentence, ask } = userIput;
    if (sentence.length === 0)
        emptyInput();
    if (ask === "1. Word Count")
        wordfunc();
    if (ask === "2. letter Count")
        letterfunc();
    if (ask === "3. Both word and sentence")
        both();
    function emptyInput() {
        console.log(chalk.yellow.bold("your input in empty please enter paragraph ]n"));
    }
    function wordfunc() {
        const wordArray = sentence.split(" ");
        const wordCount = wordArray.length;
        console.log(`\n total words of your Paragraph = ${wordCount}`);
    }
    function letterfunc() {
        const letterWithoutSpace = sentence.replace(/\s/g, "");
        const letterCount = letterWithoutSpace.length;
        console.log(` \n your total count prargraph letter = ${letterCount} `);
    }
    function both() {
        wordfunc();
        letterfunc();
    }
    let countMore = await inquirer.prompt([{
            type: "confirm",
            name: "more",
            message: "Do you want to ask more? ",
            default: false
        }]);
    if (!countMore.more) {
        myloop = false;
        console.log(chalk.red.bold.underline("\n\t Thank You for using our App"));
    }
}
