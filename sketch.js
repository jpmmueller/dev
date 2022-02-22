let x;
let y;
let step = 1;
let stepSize = 100;
let numSteps = 1;
let state = 0;
let turnCounter =0;
let mousele = false;

function mousePressed (){
  mousele = true;
}

function setup() {
  createCanvas(800, 800);
  background(0);
  x = width / 2;
  y = height / 2;
}

function draw() {
  if (mousele == true){
    textAlign(CENTER, CENTER);
    textSize(64);
    fill(255);
    text(step,x,y);

    switch (state){
      case 0:
        x += stepSize;
        break;
      case 1:
        y -= stepSize;
        break;
      case 2:
        x -= stepSize;
        break;
      case 3:
        y += stepSize;
        break;
    }
    console.log(state);
    if ( step % numSteps == 0){
      state = (state + 1) % 4;
      turnCounter++;
      if (turnCounter % 2 == 0){
        numSteps++;
      }
    }
    step++;
    mousele = false;
  }
  // frameRate(1);

}
