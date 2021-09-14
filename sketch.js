//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg1;
function preload() {

  //load images here
  dogImg1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  createCanvas(800, 700);
  dog = createSprite(400, 400, 50, 50);
  dog.addImage(dogImg1);
  dog.scale = 0.2;

}


function draw() {
  background(46, 139, 87)
  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  textSize(20);
  fill(255,255,254);
  stroke("black");
  text("food remaining: "+foodS,200,280);
  text("Note :- press UP_ARROW key to feed the draco milk!",90,20);
  }

  function readStock(data) {
    foodS = data.val();
  }

  function writeStock(x) {
    if (x <= 0) {
      x = 0;
    } else {
      x = x - 1;
    }
    database.ref('/').update({
      Food: x
    })
  }

/*function readposition() {
  position = data.val();
  Food:x=position.x;

}*/