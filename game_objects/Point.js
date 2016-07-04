Point = function(x, y) {
	this.x = x;
	this.y = y;

	this.getDistance = function(otherPoint) {
		a = Math.abs(this.x - otherPoint.x);
		b = Math.abs(this.y - otherPoint.y);
		return Math.sqrt(a*a + b*b);
	}

	this.getDistanceX = function(otherPoint) {
		return Math.abs(this.x - otherPoint.x);
	}

	this.getDistanceY = function(otherPoint) {
		return Math.abs(this.y - otherPoint.y);
	}
}