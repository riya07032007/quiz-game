var contestantCount, database
var contestant,quiz,question
var gameState = 0
var allContestants

function setup() {
  createCanvas(850, 400);

  database = firebase.database();

  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw() {
  background("green");

  // text(mouseX + ',' + mouseY, 50, 50)

  if (contestantCount === 4) {
    quiz.update(1)
  }

  if (gameState === 1) {
    clear();
    quiz.play();
  }
}