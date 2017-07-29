// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N ⬆',
  x: 0,
  y: 0,
  travelLog: [
    [0, 0],
  ],
};

var grid = [
  ['N ⬆', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
  ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '],
];

console.log('   ************************ MARS ROVER *************************');
console.table(grid);


// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N ⬆':
      rover.direction = 'W ⬅';
      break;
    case 'W ⬅':
      rover.direction = 'S ⬇';
      break;
    case 'S ⬇':
      rover.direction = 'E ➜';
      break;
    case 'E ➜':
      rover.direction = 'N ⬆';
      break;
    default:
      rover.direction = 'N ⬆';
  }
  console.log("turnLeft was called! => New direction: " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N ⬆':
      rover.direction = 'E ➜';
      break;
    case 'E ➜':
      rover.direction = 'S ⬇';
      break;
    case 'S ⬇':
      rover.direction = 'W ⬅';
      break;
    case 'W ⬅':
      rover.direction = 'N ⬆';
      break;
    default:
      rover.direction = 'N ⬆';
  }
  console.log("turnRight was called! => New direction: " + rover.direction);
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N ⬆':
      rover.y -= 1;
      if (rover.y < 0) {
        rover.y = 9;
      }
      break;
    case 'S ⬇':
      rover.y += 1;
      if (rover.y > 9) {
        rover.y = 0;
      }
      break;
    case 'E ➜':
      rover.x += 1;
      if (rover.x > 9) {
        rover.x = 0;
      }
      break;
    case 'W ⬅':
      rover.x -= 1;
      if (rover.x < 0) {
        rover.x = 9;
      }
      break;
  }
  var newPosition = [rover.y, rover.x];
  rover.travelLog.push(newPosition);
  console.log("moveForward was called! => New position: " + newPosition);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case 'N ⬆':
      if (rover.y == 9) {
        rover.y = 0;
      } else {
        rover.y += 1;
      }
      break;
    case 'S ⬇':
      if (rover.y == 0) {
        rover.y = 9;
      } else {
        rover.y -= 1;
      }
      break;
    case 'W ⬅':
      if (rover.x == 9) {
        rover.x = 0;
      } else {
        rover.x += 1;
      }
      break;
    case 'E ➜':
      if (rover.x == 0) {
        rover.x = 9;
      } else {
        rover.x -= 1;
      }
      break;
  }
  var newPosition = [rover.y, rover.x];
  rover.travelLog.push(newPosition);
  console.log("moveBackward was called! => New position: " + newPosition);
}

function moveRover(commands) {
  for (i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log('Opps!..."' + commands[i] + '"' + ' is not a valid command');
    }
  }
  console.log('Rover Travel: ' + rover.travelLog.join(' | '));
  console.log("Current Rover Direction: " + rover.direction);
  console.log("Current Rover Position: " + rover.y + ", " + rover.x);
  updateGrid();
}

function updateGrid() {
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      grid[i][j] = '   ';
    }
  }
  grid[rover.y][rover.x] = rover.direction;
  console.table(grid);
}
