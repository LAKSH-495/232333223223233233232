const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var snow;
var background,backgroundImage;

function preload(){
  backgroundImage = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  boy = new Boy(800,600,500)

  snow = new Snow(Math.random(00,1200),5,50);
    
  }

function draw() {
  background(backgroundImage);


  Engine.update(engine);  

  if(frameCount%60===0){
    snow.display();
  }
  boy.display();
}