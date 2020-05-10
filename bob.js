class bob {
    constructor(diameter) {
      var options = {
          density:1.0,
          friction:1.0,
          //restitution:0.8
          isStatic:true
      }
      this.body = Bodies.circle(mouseX,mouseY,diameter);
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      this.body.position.x = mouseX;
      pos.y=mouseY;
      
      fill("blue");
      circle(pos.x, pos.y, this.diameter);
    }
  }