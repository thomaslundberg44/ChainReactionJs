
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
			console.log("Explosion growing");
			if(this.radius < MAX_EXPLOSION_RADIUS) {
				this.radius++;
			} else {
				this.state = WAITING;
				endWaitTime = new Date().getTime()+2000;
			}
		} else if(this.state == WAITING) {
			console.log("Explosion waiting");
			var currentTime = new Date().getTime();
			if(currentTime >= endWaitTime) {
				this.state = SHRINKING;
			}
			// else wait
		} else if(this.state == SHRINKING) {
			console.log("Explosion shrinking");
			if(this.radius > MIN_EXPLOSION_RADIUS) {
				this.radius -= 2;
			} else {
				this.state = FINISHED;
				console.log("Explosion finished!");
			}
		}
	}
}

function calcScore(explodeCount) {
	// score formula = 100 * n^3
	return Math.floor(100 * Math.pow(explodeCount, 3));
}