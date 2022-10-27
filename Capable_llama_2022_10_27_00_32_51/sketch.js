function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(170);
  for(let i = 0; i < 25; i++){
    fill(random(255), random(255), random(255), random(255));//.
    for(let i = 0; i<100; i++){ellipse( random(400), random(100), random(20));}
   for(let i = 100; i<200; i++){ ellipse(random(400), random(100)+100, random(20)+10);}
  for(let i = 200; i<300;i++){
    ellipse(random(400), random(100)+200, random(10)+30);}
   for(let i = 300; i < 400; i++){
    ellipse(random(400), i, 70);}
    
  }
}
