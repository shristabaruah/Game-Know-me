var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Shrista",
    score: 5,
  },

  {
    name: "A",
    score: 4,
  },

  {
    name: "B",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Guwahati"
}, {
  question: "Where I am studying right now? ",
  answer: "Guwahati"
},
{
  question: "Which year currently I'm in? ",
  answer: "Final"
},
{
  question: "What is my favourite colour? ",
  answer: "Blue"
},
{
  question: "What is my favourite fruit? ",
  answer: "Mango"
},
{
  question:"Which is my favourite movie?",
  answer:"Zindagi na milegi Dobara"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome to my game "+ userName + " !! lets play \" Do You Know Shrista?\"");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right!");
    score = score + 1;

  } else {
    console.log("Wrong!");

  }

  console.log("Current Score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you have beaten it ping me at my twitter @rockzyshrista!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
