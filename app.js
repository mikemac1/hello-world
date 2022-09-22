'use strict';

let usersName = prompt("What is your name?");
console.log(usersName);

// declaring function
function checkName(name) {
    if (name == '' || name.length < 2) {
        for(let i = 0; i < 3; i++) {
            name = prompt("Please, enter your full name?");
            if (name.length > 2) {
                break;
            }
        } 
    }
    console.log(name);
    usersName = name;
    return usersName;
}


// invoking function
checkName(usersName);

let question = prompt("Are you enjoying Code Fellows 102? Answer Y for yes and N for no.");
console.log(question);
question = question.toLowerCase();

let dinner = prompt("What are you eating for dinner after class today?");
console.log(dinner);
let message;

// declaring function
function response () {
if (question == 'y' || question == 'yes') {
    message = "Hello, " + usersName + " thank you for visiting my website. I'm glad to hear you are enjoying Code Fellows 102. Have a great " + dinner + " after class.";
    console.log(message);
    } else {
    message = "Hello, " + usersName + ". I'm sorry class is not going well. If there is anything I can do to help please let me know & enjoy your " + dinner + ".";
    console.log(message);
 }
 document.write(message);
}

// invoking function
response();

let lastQuestion = prompt("How many cats would you like to see? Enter a number 1 thru 5.");
console.log(lastQuestion);

// declaring cat function
function addTheImage() {
    for (let x = 0; x < lastQuestion  && x < 5; x++) {
        document.write("<img class='scrimage' src='/pictures/funnycat.jpg' />");
    }
}

// invoke the function
// 
