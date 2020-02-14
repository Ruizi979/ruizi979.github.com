function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(8);
    stroke(237, 166, 235);
    background(255, 239, 199);
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(0);
    } else {
      fill(random(266),random(266),random(277)) ;
    }
      var circSize = random(200);
      rect(mouseX, mouseY, circSize, circSize);
  }