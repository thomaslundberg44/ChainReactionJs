var explosionList = [];

ExplosionControl = function(canvas, context) {
	this.canvas = canvas;
	this.context = context;
	this.initialExplosion = false;
	this.numberOfExplosions = -1;

	this.mouseClicked = function(mousePoint) {
		if(!this.initialExplosion) {
			var colour = 'rgba(255,230,230, 0.8)';
			this.createExplosion(mousePoint, -1, colour);
			this.initialExplosion = true;
		}
	}

	this.createExplosion = function(mousePoint, explodeChainLength, colour) {
		explosionList.push(new Explosion(mousePoint, ++explodeChainLength, colour));
		this.numberOfExplosions++;
	}

	this.drawExplosions = function() {
		for(var i = 0; i < explosionList.length; i++) {
			if(explosionList[i].state == FINISHED) {
				explosionList.splice(i--,1);
			} else {
				explosionList[i].animate();
				explosionList[i].draw(context);
			}
		}
	}
}