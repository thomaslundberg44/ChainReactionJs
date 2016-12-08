
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
	explosionControl = new ExplosionControl(canvas, context);
	ballControl = new BallControl(canvas, context, levelControl.numberOfBalls, explosionControl);

	ballControl.createBalls();

	window.setInterval("paintCanvas()", 1000/FPS);

	// canvas.onclick=function() { explosionControl.mouseClicked(new Point(20,20)); };
	canvas.addEventListener("click", getClickPosition, false);
}

function paintCanvas() {
	ballControl.drawBalls();
	explosionControl.drawExplosions();
}

function getClickPosition(e) {
	var posX = e.offsetX;
	var posY = e.offsetY;

	explosionControl.mouseClicked(new Point(posX, posY));
}

function getPosistion(e1) {

}

