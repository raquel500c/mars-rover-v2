// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    default:

  }
  console.log("turnLeft was called!");

}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y += 1;
      break;
    case 'S':
      rover.y -= 1;
      break;
    case 'E':
      rover.x += 1;
      break;
    case 'W':
      rover.x -= 1;
      break;
    default:

  }
  console.log("moveForward was called");
  console.log("Current Direction: " + rover.direction);
  console.log("Current Position: " + rover.x + "," + rover.y);
}

function moveRover(str) {
  for (i = 0; i < cadena.length; i++) {
    switch (str[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log(str[i] + ' no es una orden válida');
    }
  }
  console.log("Current Direction: " + rover.direction);
  console.log("Current Position: " + rover.x + "," + rover.y);
}
