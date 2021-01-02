var dog,happydDog,database,foodStock,foodS;
var count=20
var gameState ="play";
function preload(){
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);

 // database = firebase.database();
  //food = database.ref('Food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background("yellow");
textSize(20)
 text("food left : "+count,20,30);
 if(gameState="play"&&count>0){
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
  count=count-1
  dog.scale=dog.scale+0.1
}
if(keyWentDown(DOWN_ARROW)){
  dog.addImage(dogimg);
  count=count-0
  dog.scale=0.2
}
 }
 if(count<=0) {
  gameState="end";
  dog.addImage(dogimg);
  dog.scale=0.2
 
 
  
}
  drawSprites();
  fill("Black");
  textSize(24);
  stroke(7);
  text("Press Up Arrow Key To Feed Dog",50,90);
  text("Size gets bigger after Eating",50,50);
  text("Press Down Arrow Key To Make It Hungry",50,70);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}