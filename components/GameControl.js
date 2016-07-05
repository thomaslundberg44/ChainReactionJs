
var FPS = 60;

var ballControl = new BallControl();
var canvas;
var context;

function startGame() {

	canvas = document.getElementById("game_canvas");
	context = canvas.getContext("2d");

	ballControl.createBalls();

	window.setInterval("drawBalls()", 1000/FPS);
}

function drawBalls() {
	// ballControl.animateBalls();
	// context.clearRect(0,0,canvas.width, canvas.height);
	// var ballList = ballControl.ballList;
	// for(var i = 0; i < ballList.length; i++) {
	// 	ballList[i].draw(context);
	// }
	ballControl.drawBalls(canvas, context);
}
