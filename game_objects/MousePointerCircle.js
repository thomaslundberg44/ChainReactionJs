var MOUSE_POINT_RADIUS = 35;

MousePointCircle = function() {
	this.centre = new Point(325, 210);
	this.colour = "#FCFCFC14";
	this.radius = MOUSE_POINT_RADIUS;

	this.draw = function(context) {
		// draw outer circle
		context.beginPath();
		context.arc(centre.x, centre.y, this.radius, 0, 2 * Math.PI, false);
      	context.fillStyle = this.colour;
      	context.fill();

      	// draw smaller inner circle
      	innerColour = "#FFFFFF32";
      	context.arc(centre.x+26, centre.y+26, 18, 0, 2 * Math.PI, false);
      	context.fillStyle = innerColour;
      	context.fill();
	}
}