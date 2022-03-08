const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var score; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  bottom_wall =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  obstacle1 = createSprite(200,200,200,200);
  obstacle2 = createSprite(200,200,200,200);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("skyblue");

  Engine.update(engine);
}

