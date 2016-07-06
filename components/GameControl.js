
var FPS = 60;

var ballControl;
var explosionControl;
var levelControl;
var canvas;
var context;

function startGame() {

	canvas = document.getElementById("game_canvas");
	context = canvas.getContext("2d");

	levelControl = new LevelControl();
	ballControl = new BallControl(canvas, context, levelControl.numberOfBalls);
	explosionControl = new ExplosionControl(canvas, context);

	ballControl.createBalls();

	window.setInterval("paintCanvas()", 1000/FPS);

	canvas.onclick=function() { explosionControl.mouseClicked(new Point(20,20)); };
}

function paintCanvas() {
	ballControl.drawBalls();
	explosionControl.drawExplosions();
}

