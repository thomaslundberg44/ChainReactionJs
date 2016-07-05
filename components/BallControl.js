
var ballList = [];

BallControl = function() {

	this.numBalls = 10;
	// this.ballList = ballList;

	this.createBalls = function() {
		for(var i = 0; i < 10; i++) {
			var x = (Math.random()*588)+6;
			var y = (Math.random()*388)+6;
			var dirX = Math.floor(Math.random()*2);
			var dirY = Math.floor(Math.random()*2);

			if(dirX == 0) {
				dirX = 1;
			} else {
				dirX = -1;
			}

			if(dirY == 0) {
				dirY = 1;
			} else {
				dirY = -1;
			}

			var colour = getRandomColour();
			ballList.push(new Ball(new Point(x,y), dirX, dirY, colour));
		}
	}

	this.drawBalls = function(canvas, context) {
		this.animateBalls();
		context.clearRect(0,0,canvas.width, canvas.height);
		// var ballList = ballControl.ballList;
		// console.log("Ball 1, x: "+ballList[0].centre.x+", y: "+ballList[0].centre.y);
		for(var i = 0; i < ballList.length; i++) {
			ballList[i].draw(context);
		}
	}

	this.animateBalls = function() {
		for(var i = 0; i < ballList.length; i++) {
			// console.log("Moving ball number: "+i+", x: "+ballList[i].centre.x);
			this.checkForCollision(ballList[i]);
			ballList[i].moveX();
			ballList[i].moveY();
		}
	}

	this.checkForCollision = function(ball) {
		if(ball.x <= (0+ball.diameter/2) || (ball.x+ball.diameter/2) >= canvas.width) {
			ball.changeDirectionX();
		}

		if(ball.y <= (0+ball.diameter/2) || (ball.y+ball.diameter/2) >= canvas.height) {
			ball.changeDirectionY();
		}
	}
}

// function checkForCollision(ball) {
// 	if(ball.x <= (0+ball.diameter/2) || (ball.x+ball.diameter/2) >= canvas.width) {
// 		ball.changeDirectionX();
// 	}

// 	if(ball.y <= (0+ball.diameter/2) || (ball.y+ball.diameter/2) >= canvas.height) {
// 		ball.changeDirectionY();
// 	}
// }

function getRandomColour() {
    var letters = '0123456789ABCDEF'.split('');
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}