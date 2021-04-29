var dog,happyDog;
var  foodS, foodStock;
var database

function preload()
{
  dog = loadImage("sprites/dogImg.png");
  happyDog = loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(200,400,150,150)
  dog.addImage(dog);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46, 139, 87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog);

    fill(255,255,254);
    textSize(15);
    stroke(2);
    text("PRESS UP ARROW KEY TO FEED THE DOG!")

    function readStock(data){
      foodS=data.val();
    }

    function writeStock(x){

      if(x<=0){
        x=0;
      
        }else{
          x=x-1;
        }
        
      database.ref('/').update({
        Food:x
      })
    }
  
  }

  drawSprites();
  //add styles here

}



