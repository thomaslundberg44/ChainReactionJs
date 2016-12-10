
var MAX_EXPLOSION_RADIUS = 40;
var MIN_EXPLOSION_RADIUS = 4;

var GROWING = 0, WAITING = 1, SHRINKING = 2, FINISHED = 3;

var endWaitTime;

Explosion = function(centre, explodeCount, colour) {

	AbstractCircle.call(this, colour, centre);

	this.explodeCount = explodeCount;
	this.score = calcScore(this.explodeCount);
	this.radius = MIN_EXPLOSION_RADIUS;

	this.state = GROWING;

	this.animate = function() {
		if(this.state == GROWING) {
			if(this.radius < MAX_EXPLOSION_RADIUS) {
				this.radius++;
			} else {
				this.state = WAITING;
				endWaitTime = new Date().getTime()+2000;
			}
		} else if(this.state == WAITING) {
			var currentTime = new Date().getTime();
			if(currentTime >= endWaitTime) {
				this.state = SHRINKING;
			}
			// else wait
		} else if(this.state == SHRINKING) {
			if(this.radius > MIN_EXPLOSION_RADIUS) {
				this.radius -= 2;
			} else {
				this.state = FINISHED;
			}
		}
	}

	this.getExplodeChainLength = function() {
		return this.explodeCount;
	}

	// Override draw method to include score on top of circle
	this.draw = function(context) {
		// draw circle
		context.beginPath();
		context.arc(centre.x, centre.y, this.radius, 0, 2 * Math.PI, false);
      	context.fillStyle = this.colour;
      	context.fill();

      	// draw score
      	if(this.score > 0 ) {
      		context.font="20px Georgia";
	      	context.fillStyle = "#FFFFFF";
			context.fillText(this.score,this.centre.x,this.centre.y);
      	}
	}
}

function calcScore(explodeCount) {
	// score formula = 100 * n^3
	return Math.floor(100 * Math.pow(explodeCount, 3));
}