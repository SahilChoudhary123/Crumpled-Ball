class Paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic : true,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      
	Matter.Bodies.circle(100, 400, 30, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
    
  }
