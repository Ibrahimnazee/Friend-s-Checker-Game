#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

console.log(chalk.blue("\n \t \t WELCOME TO FRIEND CHECKER GAME"));
console.log(chalk.green("=".repeat(60)))


let isfriend =  await inquirer.prompt([{
    name : "name",
    type: "string",
    message : chalk.red(" Enter Your Friend's Name")
}])
if (isfriend.name === "ibrahim" || isfriend.name === "hamza"){
    console.log(chalk.bgGray(`${isfriend.name} Is Your Friend`))
} else{
    console.log(chalk.bgBlue(`${isfriend.name} Is Not Your Friend`))
  };


