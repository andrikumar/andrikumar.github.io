
var dAmt = 10;
let c1;
let c2;
var back;


//twinkle variables
var fromX, fromY;
var toX, toY;
var step = 2.5;


function setup() {
  back = createCanvas(windowWidth, windowHeight * 4);
  back.position(0,0);
  back.style('z-index','-1');
  noStroke();
 
  
}

function draw() {

  let thehours = hour();
  //morning
    if (thehours >= 0 && thehours < 12) {
      c1 = color(0, 0, 0);
      c2 = color(29, 2, 2);
    setGradient(c1, c2);
  //afternoon
    } else if (thehours >= 12 && thehours < 17) {
      c1 = color(0, 0, 0);
      c2 = color(23, 0, 40);
        setGradient(c1, c2);
      //evening
    } else if (thehours >= 17 && thehours < 24) {
      c1 = color(0, 0, 0);
      c2 = color(4, 5, 40);
        setGradient(c1, c2);
    } else {
  
    }

//twinkle();
star();
}


function mouseDragged() {
  ellipse(mouseX, mouseY, 3, 3);
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
  resizeCanvas(windowWidth, windowHeight * 4);
}

function star() {

  fill('white');
  for (var i = 0; i < dAmt; i++) {
    var al = random(30, 255);
    var y = random(0, height);
    var x = random(0, width);
    var r = random(1, 5);
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