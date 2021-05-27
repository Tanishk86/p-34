var ground;
var polygon;
var box1;

var platform1,platform2;

function preload(){
    Polygon=loadImage("polygon.png");
}

function setup(){
    createCanvas(800,700)
      
      //create boxes

      //create the platforms
      plartform1 = new Platform(350,500,250,20);
      platform2 = new Platform(450,200,250,20);

      polygon = new Polygon(200,300);
      
}

function draw(){
    createCanvas(800,700)
    background(0)
 
    text(mouseX + ',' + mouseY,120,20);
    
   
    platform1.display();
    platform2.display();

    polygon.display();
   
}