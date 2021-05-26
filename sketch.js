var dog,happyDog;
var  foodS, foodStock;
var database
var dogImg

function preload()
{
  
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  

  

  dog=createSprite(200,400,150,150)
  dog.addImage(dogImg);
  dog.scale=0.15;

  

  

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background("skyblue");
    
  fill(0);
    textSize(15);
    stroke(2);
    text("PRESS UP ARROW KEY TO FEED THE DOG!",120,20)
    text("food  :  "+foodS,200,200)

    if (keyWentDown(UP_ARROW)){
      writeStock(foodS)
    dog.addImage(happyDog);
    


    
    
    
    
    }
    drawSprites();
  }

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

  
  //add styles here

  

}


