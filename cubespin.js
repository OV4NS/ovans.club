function setup() {
  var cnv = createCanvas(140, 150, WEBGL);
  var x = (10);
  var y = (0);
  cnv.position(x, y);
  angleMode(DEGREES);
    }

    function draw() {
      background(0,0,0);
      
      push();
      normalMaterial();
      mouseRotate1();
      box(35,35,35); //inner cube
      pop();
      
      push();
      mouseRotate2();      
      fill(0,0,0,0);
      stroke(255,255,255,255);
      strokeWeight(1.5);
      box(50,50,50); //outer cube
      pop();
      
    }
    let easing = 0.20;
    function mouseRotate1() {
      rotateX(mouseX * 0.6*easing);
      rotateY(mouseY * 0.6*easing);
      rotateZ(mouseY * 0.6*easing);
    }   
    function mouseRotate2() {
      rotateY(mouseX * 0.6*easing);
      rotateX(mouseY * 0.6*easing);
      rotateZ(mouseY * 0.6*easing);
    }   

