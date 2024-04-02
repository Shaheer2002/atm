#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number:",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount:",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;

      //console.log("Your remaining balance is: "+ myBalance);
      console.log(`Your remaining balance is: $${myBalance}`);
    } else {
      console.log("You donot have sufficient funds to widthraw the amount!");
    }
  } else if (operationAns.operation === "check balance") {
    // console.log("Your balance is: " + myBalance);
    // in template literals
    console.log(`Your balance is: $${myBalance}`);
  } else if (operationAns.operation === "fast cash") {
    let fastAns = await inquirer.prompt([
      {
        name: "fast",
        message: "Select amount",
        type: "list",
        choices: ["100", "500", "1000"],
      },
    ]);
    if(fastAns.fast <= myBalance) {
      myBalance -= fastAns.fast;
      console.log(`Your remaining balance is: $${myBalance}`);
    }
    else {
      console.log("You donot have sufficient funds to widthraw the amount!")
    }
    // if (fastAns.fast === "$100") {
    //   myBalance -= 100;
    //   console.log(`Your remaining balance is: $${myBalance}`);
    // } else if (fastAns.fast === "$500") {
    //   myBalance -= 500;
    //   console.log(`Your remaining balance is: $${myBalance}`);
    // } else {
    //   myBalance -= 1000;
    //   console.log(`Your remaining balance is: $${myBalance}`);
    // }
  }
} else {
  console.log("Incorrect pin number");
}
