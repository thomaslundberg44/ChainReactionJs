
/**
 * Abstract class circle
 */
AbstractCircle = function(colour, centre) {
	this.colour = colour;
	this.centre = centre;
	this.radius;

	this.draw = function(context) {
		context.beginPath();
		context.arc(centre.x, centre.y, this.radius, 0, 2 * Math.PI, false);
      	context.fillStyle = this.colour;
      	context.fill();
	}
}