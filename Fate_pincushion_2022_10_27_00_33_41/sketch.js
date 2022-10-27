let t = 0; // time variable
var var1 = 40;
var var2 = 40;
var var3 = 200;
var var4 = 60;
var var5 = 50;
var var6 = 20;
var var7 = 0.005;
var var8 = 0.005;
function setup() {
  createCanvas(720, 400);
  noStroke();
  
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + var4) {
    for (let y = 0; y <= height; y = y + var5) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + var6 * cos(2 * PI * t + angle/2);
      const myY = y + 20 * sin(2 * PI * t + angle/2);
fill(var1, var3, var2);
      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + var7; // update time
}

function mousePressed(){
if(var1 < 200){
  var3 = var3-10;
  var1 = var1+20
  
}
  else{
    var3 = 250;
    var1 = 20;
  }
}
function keyPressed(){
  if(key == "S"|| key == "s"){
    var7 = 0;
}
  
  if(key == "r"|| key == "R"){
    var7 = var8;
}
  
  if(key == "F"|| key == "f"){
    if(var6 < 220){var6 = var6+20;}
  else{var6 = 20}
}
  if(key == "D"|| key == "d"){
    var v = var4;
    var4 = var5 + 20;
    var5 = v-10;
}
  
  if(key == "A"|| key == "a"){
    var4 = 60;
    var5 = 50;
}

}
