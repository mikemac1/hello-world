let usersName = prompt("What is your name?");
console.log(usersName);

if (usersName == '') {
    usersName = prompt("Please, what is your name?");
}

let question = prompt("Are you enjoying Code Fellows 102? Answer Y for yes and N for no.");
console.log(question);

let dinner = prompt("What are you eating for dinner after class today?");
console.log(dinner);
let message;

if (question == 'Y' || question == 'y') {
    message = "Hello, " + usersName + " thank you for visiting my website. I'm glad to hear you are enjoying Code Fellows 102. Have a great " + dinner + " after class.";
    console.log(message);
    } else {
    message = "Hello, " + usersName + ". I'm sorry class is not going well. If there is anything I can do to help please let me know & enjoy your " + dinner + ".";
    console.log(message);
 }
 document.write(message);