class Snow{
	constructor(x, y, width, height, angle){
		var options = {
			'friction': 0.001,
			'isStatic': false,
			'density': 0.02
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		World.add(world, this.body);
	}
	display(){
		var angle = this.body.angle;
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(angle);
		noStroke();
		fill("white");
		ellipse(0, 0, this.width, this.height);
		pop();
	}
}