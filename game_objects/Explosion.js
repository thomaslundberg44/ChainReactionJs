
var MAX_EXPLOSION_RADIUS = 40;
var MIN_EXPLOSION_RADIUS = 4;

var GROWING = 0, WAITING = 1, SHRINKING = 2, FINISHED = 3;

var state;
var radius;

var endWaitTime;

Explosion = function(centre, explodeCount, colour) {

	AbstractCircle.call(this, colour, centre);

	this.explodeCount = explodeCount;
	this.score = calcScore(this.explodeCount);
	radius = MIN_EXPLOSION_RADIUS;

	state = GROWING;

	this.animate = function() {
		if(state == GROWING) {
			if(radius < MAX_EXPLOSION_RADIUS) {
				radius++;
			} else {
				state = WAITING;
				endWaitTime = new Date().getTime()+2000;
			}
		} else if(state == WAITING) {
			var currentTime = new Date().getTime();
			if(currentTime >= endWaitTime) {
				state = SHRINKING;
			}
			// else wait
		} else {
			if(radius > MIN_EXPLOSION_RADIUS) {
				radius -= 2;
			} else {
				state = FINISHED;
				console.log("Explosion finished!");
			}
		}
	}
}

function calcScore(explodeCount) {
	// score formula = 100 * n^3
	return Math.floor(100 * Math.pow(explodeCount, 3));
}