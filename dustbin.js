
class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.body1 = Bodies.rectangle(x-125, y, 20, 80, options);
      this.body2 = Bodies.rectangle(x+125, y, 20, 80, options);
      
      this.image = loadImage("dustbin.png"); 

      World.add(world, this.body);
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){

      
      imageMode(CENTER);

      fill(255);

      image(this.image, this.body.position.x, this.body.position.y, this.width, 100);
    }
  };
