const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionsHeight = 300;
var plinkos = [];
var divisions = [];
var particles = [];

function preload(){

}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  for (var k = 0; k<= width; k = k + 80) {
    divisions.push(new Divisions(k, height -divisionsHeight/2,10,divisionsHeight));
  }

  for (var i = 75;i <= width; i = i+50){
    plinkos.push(new Plinko(i,75));
  }


  for (var i = 50;i <= width; i = i+50){
    plinkos.push(new Plinko(i,175));
  }
  
  for (var i = 75;i <= width; i = i+50){
    plinkos.push(new Plinko(i,275));
  }


  for (var i = 50;i <= width; i = i+50){
    plinkos.push(new Plinko(i,375));
  }



  ground = new Ground(240,780,480,20)

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }

  for (var g = 0; g<plinkos.length; g++){
    plinkos[g].display();
  }


  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  //drawSprites();
}