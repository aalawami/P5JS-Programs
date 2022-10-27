let canvas;

let brush = 0;

let x1 = -1;
let y1 = -1;
let x2 = -1;
let y2 = -1;

let tool = [];

function setup() {
 
  canvas = createCanvas(800, 800);
  button = createButton("Change tool");
  button.position(370,790);
  button.mousePressed(diffTool);
}

function draw() {
  
  if(brush == 0){
    background(250);
    tool1(mouseX,mouseY);
  }
  
  if(brush == 1){
    
  tool3(mouseX,mouseY,pmouseX,pmouseY);
    
    
  }
  if(brush == 2){
    tool2(mouseX,mouseY,pmouseX,pmouseY);
  } 
}

function diffTool(){
  //reset data
  x1 = -1;
  y1 = -1;
  x2 = -1;
  y2 = -1;
  tool = [];
  
  background(0);
  

  if(brush == 2){
    brush = 0;
  }
  else{
    brush++;
  }
}

function tool1(xPos, yPos){
  
  const m = 250;
  
  let size = random(5,30)+ random(500, 505)- random(450, 500);
  let rX = xPos;
  let rY = yPos;
  
  
  
  tool.push({x:rX, y:rY, age:m, size: 1, track:size});
  
  
  for(let i = 0; i<tool.length; i++){
   
    let r = tool[i];
   
    if(r.size <= r.track){
      tool[i].size += 1;
    }
   
    
    if(r.size > r.track){
      tool[i].age += 1;
      if(tool[i].age < tool[i].track){
        tool[i].size += 1
        tool[i].maxSize += 1;
      }
    }
  }

  
  
  //draw the blots
  for(const i of tool){
    noStroke();
    fill(m - i.age);
    ellipse(i.x,i.y,i.size);
  }
  
}

function tool2(x,y,px,py){

  let i = 0;
  if(mouseIsPressed == true && i == 0){
    i += 1;
  }else{
    i = 0;
  }
  
  if(i>0){
  stroke(x%255,y%255,(px-py)%255);
  strokeWeight(50);
  circle(mouseX, mouseY, (mouseX/2), (mouseY/2));
  line(x+i,y+i,px+i,py+i);
  }
  
}

function tool3(x,y,px,py){

  let i = 0;
  if(mouseIsPressed == true && i == 0){
    i += 1;
  }else{
    i = 0;
  }
  
  if(i>0){
   let var1 = mouseX+25; 
   let var2 = mouseY;
   let var3 = 10;
  ellipse(var1, var2, var3, var3);
  ellipse(mouseX, var2-25, var3, var3);
  ellipse(mouseX -25, var2, var3, var3);
    fill( random(10, 50), random(50, 150), random(150, 200) );
  }
  
}


