var BALL_RADIUS = 6;

Ball = function (centre, dx, dy, colour) {

	AbstractCircle.call(this, colour, centre);

	this.centre = centre;
	this.radius = BALL_RADIUS;
	this.directionX = dx;
	this.directionY = dy;
	this.colour = colour;

	this.changeDirectionX = function() {
		this.directionX *= -1;
	}

	this.changeDirectionY = function() {
		this.directionY *= -1;
	}

	this.moveX = function() {
		this.x += this.directionX;
	}

	this.moveY = function() {
		this.y += this.directionY;
	}

	console.log("Created ball, dirX: "+this.directionX+", dirY: "+this.directionY);
}