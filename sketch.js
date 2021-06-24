var jaxon, pathImg, path, jaxonImg, left_boundary, right_boundary, subway, subwayImg, coin, coinImg, coinscore,song,slider;


function preload(){
 
  jaxonImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  
 
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.y=path.height/30;
 
  jaxon=createSprite(180,340,30,30);
  jaxon.addAnimation("Jakerunning", jaxonImg);

 coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  //background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;

  jaxon.x=World.mouseX;

  edges=createEdgeSprites();

  if(path.y>400) {
  path.y=height/2 ;
  }

  if(jaxon.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  

jaxon.collide(left_boundary);
jaxon.collide(right_boundary);
 
  jaxon.collide(edges[3]);
  //jaxonX=mouseX;
drawSprites();
}

