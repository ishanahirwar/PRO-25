class Paper
{
	constructor(x,y)
	{
        var options={
                       isStatic:false,
                       restitution:0.3,
                       friction:0,
                       density:1.2,
        }

		this.x=x;
		this.y=y;
		this.width=75;
		this.height=75;
		
		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x,y,75,75);
		
		World.add(world, this.body)
		
	}
	display()
	{
			var pos=this.body.position;
						

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop()


			
	}

}