const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var block;
var bob1;
var chain1;

function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  block= new pendulum(150,50,200,25);
  bob1= new bob(35);
  chain1=new chain(block.body,bob1.body);
}


  function draw(){
    background("yellow");
    Engine.update(engine);

   if(keyPressed(keyCode===32)){
    chain1.display();
   }
   else{

   }
    block.display();
    bob1.display();
    
    
  }