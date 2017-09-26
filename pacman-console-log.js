// pacman-console-log.js

console.log('Pac-Man eats ghosts for lunch.');

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
// var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};

console.log(ghosts);

// console.log('There are ' + ghosts.length + ' ghosts.');
// console.log('They are ... ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);

// var inky = {};
// inky.color = 'Cyan';
// inky.personality = 'Shadow';
// console.log(inky);

// console.log(ghosts.inky);
// console.log(ghosts['inky']);

// var ghostName = 'pinky';
// console.log(ghosts[ghostName]);

// for (var index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats ' + ghosts[index]);
// }

// var powerPelletEaten = false;
// var ghosts = 4;
//
// while (true) {
//   console.log('Ghost remaining: ' + ghosts);
//
//   if (powerPelletEaten == false) {
//     console.log('Pac-Man eats a power pellet.');
//     powerPelletEaten = true;
//   }
//   else if (ghosts > 0) {
//     console.log('Pac-Man eats a ghost.');
//     ghosts--;
//   }
//   else {
//     break;
//   }
// }
// console.log('Pac-Man returns home after a long day in the maze.');

// var ghost = 'Blinky';
// var color;
//
// switch (ghost) {
//   case 'Inky':
//     color = 'Cyan';
//     break;
//   case 'Blinky':
//     color = 'Red';
//     break;
//   case 'Pinky':
//     color = 'Pink';
//     break;
//   case 'Clyde':
//     color = 'Orange';
//     break;
// }
//
// console.log(ghost + ' is in color ' + color);

// function eatDot() {
//   console.log('MUNCH!');
// }
//
// var eatDot = function() {
//   console.log('MUNCH!');
// }
//
// eatDot();

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
  var record = { player: playerInitials, score: score };
  highScoreList.push(record);
}

highScores
addHighScore(highScores, 'KC', 15000);
console.log(highScores);

function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
