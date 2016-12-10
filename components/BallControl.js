
var COLOURS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];
var TRANSPARENT_COLOURS = [	'rgba(255,0,0, 0.5)', 'rgba(0,255,0, 0.5)', 'rgba(0,0,255, 0.5)',
							'rgba(255,255,0, 0.5)', 'rgba(0,255,255, 0.5)', 'rgba(255,0,255, 0.5)'];


var ballList = [];

BallControl = function(canvas, context, numBalls, explosionControl) {
	this.canvas = canvas;
	this.context = context;
	this.numBalls = numBalls;
	this.explosionControl = explosionControl;

	this.createBalls = function() {
		for(var i = 0; i < this.numBalls; i++) {
			var x = (Math.random()*588)+6;
			var y = (Math.random()*388)+6;
			var dirX = Math.floor(Math.random()*2);
			var dirY = Math.floor(Math.random()*2);

			dirX = dirX == 0 ? 1 : -1;
			dirY = dirY == 0 ? 1 : -1;

			var colour = getRandomColour();
			ballList.push(new Ball(new Point(x,y), dirX, dirY, colour));
		}
	}

	this.drawBalls = function() {
		this.animateBalls();
		context.clearRect(0,0,canvas.width, canvas.height);

		for(var i = 0; i < ballList.length; i++) {
			ballList[i].draw(context);
		}
	}

	this.animateBalls = function() {
		for(var i = 0; i < ballList.length; i++) {
			ballList[i].moveX();
			ballList[i].moveY();
			this.checkForCollision(ballList[i]);
			if(this.checkForExplosionCollision(ballList[i])) {
				ballList.splice(i--, 1);
			}
		}
	}

	this.checkForCollision = function(ball) {
		if(ball.centre.x <= (0+ball.radius) || (ball.centre.x+ball.radius) >= this.canvas.width) {
			ball.changeDirectionX();
		}

		if(ball.centre.y <= (0+ball.radius) || (ball.centre.y+ball.radius) >= this.canvas.height) {
			ball.changeDirectionY();
		}
	}

	this.checkForExplosionCollision = function(ball) {
		for(var i = 0; i < explosionList.length; i++) {
			var distance = ball.centre.getDistance(explosionList[i].centre);
			if(distance < (BALL_RADIUS + explosionList[i].radius)) {
				this.explosionControl.createExplosion(ball.centre, 
					explosionList[i].getExplodeChainLength(), getRandomTransparentColour());
				return true;
			}
		}
		return false;
	}
}

function getRandomColour() {
	return COLOURS[Math.floor(Math.random() * COLOURS.length)];
}


function getRandomTransparentColour() {
	return TRANSPARENT_COLOURS[Math.floor(Math.random() * TRANSPARENT_COLOURS.length)];
}