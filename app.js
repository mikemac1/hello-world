'use strict';

let userName = prompt("What is your name?");
console.log(userName);

// declaring function
function checkName(name) {
    for(let i = 0; i < 3; i++) {
        if (name == '' || name.length < 3) {
            userName = prompt("Please, enter your full name?");
        } 
    }
    console.log(userName);
    return userName;
}

// invoking function
checkName(userName);

let question = prompt("Are you enjoying Code Fellows 102? Answer Y for yes and N for no.");
console.log(question);
question = question.toLowerCase();

let dinner = prompt("What are you eating for dinner after class today?");
console.log(dinner);
let message;

// declaring function
function response () {
if (question == 'y' || question == 'yes') {
    message = "Hello, " + userName + " thank you for visiting my website. I'm glad to hear you are enjoying Code Fellows 102. Have a great " + dinner + " after class.";
    console.log(message);
    } else {
    message = "Hello, " + userName + ". I'm sorry class is not going well. If there is anything I can do to help please let me know & enjoy your " + dinner + ".";
    console.log(message);
 }
 document.write(message);
}

// invoking function
response();