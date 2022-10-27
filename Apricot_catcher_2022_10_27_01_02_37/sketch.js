var virus;
var player;
var rg;
var rs;
var moveSpeed = 1;
var ded = 0;
var r;
var s;
let spike;
let spike2;
let spike3;
let spike4;
var ss = 20;
var cc = 80;
var h = 20;
var v = 0;
var b;
var bull = 3;
var xa = 100;

function preload() {
  s = loadImage('rrrr/r.png');
  b = loadImage('rrrr/b.png');
}

function setup() {
  createCanvas(800, 800);
  virus = new Group();
  rs = new Group();
  rg = new Group();

  p = loadImage('rrrr/p.png');
  
  spike = createSprite(0,0,1600,20);
  spike2 = createSprite(0,0,20,1600);
  spike3 = createSprite(800,600,20,1200)
  spike4 = createSprite(800,800,1600,20);

  
 for(j = 0; j < 7; j++){ 
  for (i = 0; i < 10; i++){
    var newStone = createSprite(i*cc,xa);
    var stoneImg = loadImage('rrrr/d.png');
    newStone.addImage(stoneImg);
    newStone.setCollider('circle', 0, 0, 1);
    virus.add(newStone);
  }
   xa = xa + 100;
 }
  
  
  
  
  
  for (i = 0; i < 20; i++){
    var ns = createSprite(random(0,width),random(0,height));
    ns.addSpeed(random(0.5,1), random(0, 360));
    var stoneImgs = loadImage('rrrr/s.png');
    ns.addImage(stoneImgs);
    ns.setCollider('circle', 0, 0, 1);
    rs.add(ns);
  }
  
  
  player = createSprite(width/2, height/2,16,16);
  player.addImage('defualt', p);
}

function draw() {
  background(220);
  
  
  if(keyDown('W')){
    player.position.y -= moveSpeed;
    if(bull > 0){
      fire(1);
      //bull--;
    }
  }
  else if (keyDown('S')){
    player.position.y += moveSpeed;
    if(bull > 0){
      fire(2);
     // bull--;
    }
  }
  if(keyDown('A')){
    player.position.x -= moveSpeed;
    if(bull > 0){
      fire(3);
     // bull--;
    }
  }
  else if (keyDown('D')){
    player.position.x += moveSpeed;
    if(bull > 0){
      fire(4);
     // bull--;
    }
  }
  
  
  player.collide(spike);
  player.collide(spike2);
  player.collide(spike3);
  player.collide(spike4);
  player.collide(virus);
  player.overlap(rs, kick);
  rs.collide(virus, bounce);
  rs.bounce(rs);
  player.overlap(rg, dead);
  rg.overlap(spike, ree);
  rg.overlap(spike2, ree);
  rg.overlap(spike3, ree);
  rg.overlap(spike4, ree);
  rs.overlap(spike, reee);
  rs.overlap(spike2, reee);
  rs.overlap(spike3, reee);
  rs.overlap(spike4, reee);
 var tt =v;
  if(ded == 1){
  text('scroe: '+ v, 30, 30);
  text('u ded', 400, 400);
  }  
  
  if(v >= 0 && ded == 0){
  text('scroe: '+ v, 30, 30);
  }  
  
  if (h<5){
    var newStones = createSprite(random(0,width),random(0,height));
    newStones.addSpeed(random(0.5,1), random(0, 360));
    var stoneImgs = loadImage('rrrr/s.png');
    newStones.addImage(stoneImgs);
    rs.add(newStones);
    h++;
  }
  
  
  drawSprites();
}

function kick(kicker, rock){
  
  let v0 = createVector(rock.position.x-player.position.x, rock.position.y-player.position.y); // draw a line from player to rock
  v0 = v0.heading(); //get the angle
  v0 = degrees(v0); // convert angle to degrees
  rock.addSpeed(1,v0); //send rock that direction
  
}

function dead(){
  player.remove();
  ded = 1;
}

function ree(hmm){
  hmm.remove();
  v++;
}

function reee(hmm){
  hmm.remove();
  h--;
}

function fire(dir){
  if(dir == 1){
  bull = createSprite(player.position.x, player.position.y, 3,12);
  bull.setCollider('circle', 0, 0, 3);
  bull.addImage('default', b);
  bull.setSpeed(5, -90);
  }
  
  if(dir == 2){
  bull = createSprite(player.position.x, player.position.y, 3,12);
  bull.setCollider('circle', 0, 0, 3);
  bull.addImage('default', b);
  bull.setSpeed(5, 90);
  }
  
  if(dir == 3){
  bull = createSprite(player.position.x, player.position.y, 3,12);
  bull.setCollider('circle', 0, 0, 3);
  bull.addImage('default', b);
  bull.setSpeed(5, 0);
  }
  
  if(dir == 4){
  bull = createSprite(player.position.x, player.position.y, 3,12);
  bull.setCollider('circle', 0, 0, 3);
  bull.addImage('default', b);
  bull.setSpeed(5, -135);
  }
  
}

function bounce(moving, solid){
  
  moving.remove();
  h--;

  for(i = 0; i< 10; i++){
  r = createSprite(moving.position.x, moving.position.y, 12,12);
  r.addImage('defualt', s);
  r.shapeColor = 'red';
  r.setSpeed(0.5, random(0,360));
  r.setCollider('circle', 0, 0, 1);
  rg.add(r);
  
 }
}