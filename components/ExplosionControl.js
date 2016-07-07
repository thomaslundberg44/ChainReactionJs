var explosionList = [];

ExplosionControl = function(canvas, context) {
	this.canvas = canvas;
	this.context = context;
	this.initialExplosion = false;
	this.numberOfExplosions = 0;

	this.mouseClicked = function(mousePoint) {
		if(!this.initialExplosion) {
			var colour = "rgba(255,230,230, 0.8)";
			this.createExplosion(mousePoint, colour);
			this.initialExplosion = true;
			console.log("Drawing explosion at ("+mousePoint.x+","+mousePoint.y+")");
		}
	}

	this.createExplosion = function(mousePoint, colour) {
		explosionList.push(new Explosion(mousePoint, this.numberOfExplosions, colour));
	}

	this.drawExplosions = function() {
		for(var i = 0; i < explosionList.length; i++) {
			if(explosionList[i].state == FINISHED) {
				explosionList.splice(i,1);
			} else {
				explosionList[i].animate();
				explosionList[i].draw(context);
			}
		}
	}
}