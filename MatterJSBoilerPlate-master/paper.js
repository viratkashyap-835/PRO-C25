class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.radius, options);
     World.add(world,this.body); 
	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill("white");
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
  
  