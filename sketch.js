var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange,red,orangei,redi,applei;
function preload(){
  gardenImg = loadImage("garden.png","grass.png");
  rabbitImg = loadImage("rabbit.png");
  applei = loadImage("apple.png");
  orangei = loadImage("orangeLeaf.png","leaf.png");
  redi = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var ch = Math.round(random(1,3));

  if (frameCount%80 == 0){
    if(ch == 1){
      capples();
    }

    else if(ch ==2){
      corange();
    }
    else{
      cred();
    }
  }

function capples(){  
  apple=createSprite(120,40,10,10);
  apple.x = Math.round(random(50,350));
  apple.addImage(applei);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime =150;
}

function corange(){  
orange=createSprite(120,40,10,10);
orange .x = Math.round(random(50,350));
orange.addImage(orangei);
orange.scale = 0.07;
orange.velocityY = 3;
orange.lifetime =150;
}

function cred(){  
red=createSprite(120,40,10,10);
red.x = Math.round(random(50,350));
red.addImage(redi);
red.scale = 0.07;
red.velocityY = 3;
red.lifetime =150;
}
drawSprites();
}