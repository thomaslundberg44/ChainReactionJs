
var FPS = 60;

var ballControl;
var levelControl;
var canvas;
var context;

function startGame() {

	canvas = document.getElementById("game_canvas");
	context = canvas.getContext("2d");

	levelControl = new LevelControl();
	ballControl = new BallControl(canvas, context, levelControl.numberOfBalls);

	ballControl.createBalls();

	window.setInterval("ballControl.drawBalls()", 1000/FPS);
}

