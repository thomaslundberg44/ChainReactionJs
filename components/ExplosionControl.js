var explosionList = [];

ExplosionControl = function(canvas, context) {
	this.canvas = canvas;
	this.context = context;
	this.initialExplosion = false;
	this.numberOfExplosions = 0;

	this.mouseClicked = function(mousePoint) {
		console.log("mouse clicked");
		if(!this.initialExplosion) {
			var colour = "rgba(255,230,230, 0.8)";
			this.createExplosion(mousePoint, colour);
			this.initialExplosion = true;
		}
	}

	this.createExplosion = function(mousePoint, colour) {
		explosionList.push(new Explosion(new Point(100,100), this.numberOfExplosions, colour));
	}

	this.drawExplosions = function() {
		for(var i = 0; i < explosionList.length; i++) {
			explosionList[i].animate();
			explosionList[i].draw(context);
		}
	}
}