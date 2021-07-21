
var A
var B

function setup() {
  createCanvas(400, 400);
 A = prompt("please enter the value of variable A");
 B = prompt("please enter the value of variable B");
 var buttonOne = createButton("Click here to swap");
 buttonOne.mousePressed(swap);
}

function draw() { 
  background(220);
  // console.log(A);
  // console.log(B);
}

function swap(){
[A,B] = [B,A]
console.log("Variable A, after swapping values with B, equals " +A);
console.log("Variable B, after swapping values with A, equals " +B);
}