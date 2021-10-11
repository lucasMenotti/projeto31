class Particle {
    constructor(x,y,r) {
    this.body = Bodies.circle(x,y,r);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body); 
    this.r = r;
}  
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0, 0, this.r,this.r);
    pop();
  }
    }
    