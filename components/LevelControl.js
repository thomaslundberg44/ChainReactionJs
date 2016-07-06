
var EXPLOSION_COUNT = [1,2,4,6,10,15,18,22,30,37,48,54];

LevelControl = function() {
	this.levelCounter = 1;
	this.numberOfBalls = 5;
	this.explosionThreshold = 1;

	this.levelUp = function() {
		if(this.levelCounter < 12) {
			this.levelCounter++;
			this.numberOfBalls += 5;
			this.updateExplosionThreshold();
		}
	}

	this.updateExplosionThreshold = function() {
		this.explosionThreshold = EXPLOSION_COUNT[this.levelCounter-1];
	}
}