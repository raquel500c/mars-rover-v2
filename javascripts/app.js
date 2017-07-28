// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["[0, 0]"],
};

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
  var displaced = false;
  console.log("moveForward was called!");
  switch (rover.direction) {
    case 'N':
      if (rover.y === 9) {
        console.log("### Rover not displaced,  NORTH BORDER ###");
      } else {
        rover.y += 1;
        displaced = true;
      }
      break;
    case 'S':
      if (rover.y === 0) {
        console.log("### Rover not displaced, SOUTH BORDER ###");
      } else {
        rover.y -= 1;
        displaced = true;
      }
      break;
    case 'E':
      if (rover.x === 9) {
        console.log("### Rover not displaced, EAST BORDER ###");
      } else {
        rover.x += 1;
        displaced = true;
      }
      break;
    case 'W':
      if (rover.x === 0) {
        console.log("### Rover not displaced, WEST BORDER ###");
      } else {
        rover.x -= 1;
        displaced = true;
      }
      break;
  }
  if (displaced) {
    var newPosition = " [" + rover.x + ", " + rover.y + "]";
    rover.travelLog.push(newPosition);
  }
}

function moveBack(rover) {
  var displaced = false;
  console.log("moveForward was called!");
  switch (rover.direction) {
    case 'S':
      if (rover.y === 9) {
        console.log("### Rover not displaced,  NORTH BORDER ###");
      } else {
        rover.y += 1;
        displaced = true;
      }
      break;
    case 'N':
      if (rover.y === 0) {
        console.log("### Rover not displaced, SOUTH BORDER ###");
      } else {
        rover.y -= 1;
        displaced = true;
      }
      break;
    case 'W':
      if (rover.x === 9) {
        console.log("### Rover not displaced, EAST BORDER ###");
      } else {
        rover.x += 1;
        displaced = true;
      }
      break;
    case 'E':
      if (rover.x === 0) {
        console.log("### Rover not displaced, WEST BORDER ###");
      } else {
        rover.x -= 1;
        displaced = true;
      }
      break;
  }
  if (displaced) {
    var newPosition = " [" + rover.x + ", " + rover.y + "]";
    rover.travelLog.push(newPosition);
  }
}

function moveRover(str) {
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBack(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log('"' + str[i] + '"' + ' no es una orden válida');
    }
  }
  console.log("Rover Travel => " + rover.travelLog);
  console.log("Current Rover Direction: " + rover.direction);
  console.log("Current Rover Position: " + "[" + rover.x + ", " + rover.y + "]");
}
