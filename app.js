var readLineSync = require("readline-sync");
const chalk = require("chalk")
var score = 0;
const high_score = 4;

var questions = [{
        question: "Which Hokage sealed the nine-tailed fox inside Naruto?",
        answer: "fourth Hokage"
    },
    {
        question: "Which character can only use taijutsu?",
        answer: "Rock Lee"
    },
    {
        question: "Sasuke's goal is gain enough power to kill whom?",
        answer: "Itachi Uchiha"
    },
    {
        question: " Which of the legendary sannin becomes the fifth Hokage?",
        answer: "Tsunade"
    }
]

function welcome() {

    var userName = readLineSync.question("What's your name?");
    console.log("Welcome" + " " + userName);
    console.log("Let's see how much do you know about the greatest anime ever made....");
    console.log(chalk.keyword('orange')("NARUTO"));
}

function play(question, answer) {

    var userAnswer = readLineSync.question(question);
    if (userAnswer.toUpperCase() == answer.toUpperCase()) {
        console.log(chalk.green("Correct..."));
        score++;
    } else {
        console.log(chalk.red("Wrong..."));
    }

    console.log("current score:" + score);
    console.log(".........");
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function showScore() {
    console.log("You scored" + " " + score);

    if (score == high_score)
        console.log("Congratulations! you have the highest score");
    console.log("Thank you for taking the quiz");
}

welcome();
game();
showScore();