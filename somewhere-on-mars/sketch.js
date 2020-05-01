
var dAmt = 150;
let c1;
let c2;
var back;


//twinkle variables
var fromX, fromY;
var toX, toY;
var step = 2.5;


function setup() {
  back = createCanvas(windowWidth, windowHeight);
  back.parent('p5');

  noStroke();
  star();
  //twinkle();
}

function draw() {

//twinkle();

}


function mouseDragged() {
  ellipse(mouseX, mouseY, 1, 1, 100);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
  star();
}


function star() {

  fill('white');
  for (var i = 0; i < dAmt; i++) {
    var al = random(30, 255);
    var y = random(0, height);
    var x = random(0, width);
    var r = random(.3, 1);
    fill(255, al);
    ellipse(x, y, r, r);
  }
}

function twinkle() {


	if (random() > 0.9) {
		stroke(255);
		point(random(width), random(height));
	}
	
  // draw stars
	if (random() > 0.95 && step >= 2.5) {
		fromX = random(width);
		fromY = random(height/2);
		toX = random(fromX+10, width);
		toY = random(fromY+10, height/2);
		step = 0;
	}
}