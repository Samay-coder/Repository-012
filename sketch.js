const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon;
var launcher;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;
  stand = new Stand(400,280,220,10);
  box1 = new Box(200,200);
  box2 = new Box(200,300);
  box3 = new Box(360,275);
  box4 = new Box(390,275);
  box5 = new Box(420,275);
  box6 = new Box(450,275);
  box7 = new Box(480,275);
  box8 = new Box(330,275);
  box9 = new Box(360,275);
  box10 = new Box(390,275);
  box11 = new Box(420,275);
  box12 = new Box(450,275);
  box13 = new Box(360,275);
  box14 = new Box(390,275);
  box15 = new Box(420,275);
  box16 = new Box(360,275);
  polygon = new Polygon(200,200);
  launcher = new Launch(polygon.body,{x:200,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  polygon.display();
  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}