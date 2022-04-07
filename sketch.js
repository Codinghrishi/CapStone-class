var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.5

  
  doorsGroup = new Group();
  climbersGroup = new Group();
}
function draw() {
  background(200);

  if (gameState === "play") {
  if(tower.y > 400){
      tower.y = 300
      
    }

    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }  

    spawnDoors();

    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
      ghost.destroy();
      gameState = "end"
    }

  }

  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

    drawSprites();
    }

    function spawnDoors(){
      
      if(frameCount % 240 === 0 ){
        
         door = createSprite(200,-50)
        door.addImage(doorImg)


       
         climber= createSprite(200,10)
        climber.addImage(climberImg)
        climber.x = door.x  
        climber.velocityY = + 3
        door.velocityY = + 3

        doorsGroup.add(door);
        climbersGroup.add(climber);
      }
    }