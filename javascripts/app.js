var rover={
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
var last=null;
var route="";
// ======================
var grid=[ 
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']];
  // ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      last=rover.direction;
      rover.direction="W";
      console.log(`Rover was facing ${last}, now is facing West!`);
      break;
    case "S":
      last=rover.direction;
      rover.direction="E";
      console.log(`Rover was facing ${last}, now is facing East!`);
      break;
    case "W":
      last=rover.direction;
      rover.direction="S";
      console.log(`Rover was facing ${last}, now is facing South!`);
      break;
    case "E":
      last=rover.direction;
      rover.direction="N";
      console.log(`Rover was facing ${last}, now is facing North!`);
      break;
    default:
      Console.log("Expecting different direction!!");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      last=rover.direction;
      rover.direction="E";
      console.log(`Rover was facing ${last}, now is facing East!`);
      break;
    case "S":
      last=rover.direction;
      rover.direction="W";
      console.log(`Rover was facing ${last}, now is facing West!`);
      break;
    case "W":
      last=rover.direction;
      rover.direction="N";
      console.log(`Rover was facing ${last}, now is facing North!`);
      break;
    case "E":
      last=rover.direction;
      rover.direction="S";
      console.log(`Rover was facing ${last}, now is facing South!`);
      break;
    default:
      console.warn("Expecting different direction!!");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction){
    case "S":
      if(grid[rover.x][rover.y+1]!="X" && rover.y+1<=10){
        rover.y+=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x][rover.y+1]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    case "N":
      if(grid[rover.x][rover.y-1]!="X" && rover.y-1>=0){
        rover.y-=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x][rover.y-1]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    case "W":
      if(grid[rover.x-1][rover.y]!="X" && rover.x-1>=0){
        rover.x-=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x-1][rover.y]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    case "E":
      if(grid[rover.x+1][rover.y]!="X" && rover.x+1<=10){
        rover.x+=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x+1][rover.y]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    default:
      Console.log("No battery!! Please refresh me!!");
      break;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction){
    case "S":
        if(grid[rover.x][rover.y+1]!="X" && rover.y-1>=0){
          rover.y-=1;
          rover.travelLog.push(`(${rover.x},${rover.y})`);
          console.log(`Current coordinates are [${rover.x},${rover.y}]`);
          break;
        }
        else if(grid[rover.x][rover.y+1]=="X"){
          console.log("Ops! I found a obstacle! I can't move forward!")
          break;
        }
        else{
          console.log("Ops! Rover is only allowed to move between 0 and 10!");
          break;
        }
    case "N":
      if(grid[rover.x][rover.y-1]!="X" && rover.y+1<=10){
        rover.y+=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x][rover.y-1]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    case "W":
      if(grid[rover.x+1][rover.y]!="X" && rover.x+1<=10){
        rover.x+=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x+1][rover.y]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    case "E":
      if(grid[rover.x-1][rover.y]!="X" && rover.x-1>=0){
        rover.x-=1;
        rover.travelLog.push(`(${rover.x},${rover.y})`);
        console.log(`Current coordinates are [${rover.x},${rover.y}]`);
        break;
      }
      else if(grid[rover.x-1][rover.y]=="X"){
        console.log("Ops! I found a obstacle! I can't move forward!")
        break;
      }
      else{
        console.log("Ops! Rover is only allowed to move between 0 and 10!");
        break;
      }
    default:
      Console.log("No battery!! Please refresh me!!");
      break;
  }
}

function travel(route){
  console.log("Let's go!")
  for(let i=0;i<route.length;i++){
    var letter=route[i];
    switch(letter){
      case "l" || "L":
        turnLeft(rover);
        break;
      case "r" || "R":
        turnRight(rover);
        break;
      case "f" || "F":
        moveForward(rover);
        break;
      case "b" || "B":
        moveBackward(rover);
        break;
      default:
        console.log(`${letter}: Letter not allowed. Moving for the next one!`);
        break;
    }
  }
  console.log(`My route:${rover.travelLog}`);
}

function find(rover){
  console.log(`Hey, look! I'm here: [${rover.x},${rover.y}], pointing to ${rover.direction}`);
}

function getRandomNum(){
  return Math.floor(Math.random() * 10);
}

function newObs(arr){
  var varX=getRandomNum();
  var varY=getRandomNum();
  arr[varX][varY]="X";
  console.log(`New object created: [${varX},${varY}]`);
}

console.log("Previous direction: "+last); 
console.log("Rover direction: "+rover.direction);
