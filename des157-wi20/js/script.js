function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(10);
    stroke(237, 166, 235);
    background(230, 213, 168);
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(0);
    } else {
      fill(random(255), random(255), random(255), random(255));
    }
      var circSize = random(200);
      rect(mouseX, mouseY, circSize, circSize);
  }