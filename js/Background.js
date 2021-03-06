function Background(){
	
	this.state = Background.STATE_INACTIVE;
	
	// Initialisations...
	
	// Load canvas
	this.context = Util.createCanvas(1);
	
}

Background.STATE_ACTIVE = 000;
Background.STATE_INACTIVE = 100;

Background.prototype.refresh = function(){
	this._draw();
};

Background.prototype.activate = function(){
	if(this.state != Background.STATE_INACTIVE) return false;
	
	this.state = Background.STATE_ACTIVE;
};

Background.prototype.deactivate = function(){
	if(this.state != Background.STATE_ACTIVE) return false;
	
	this.state = Background.STATE_INACTIVE;
};

Background.prototype._draw = function(){
	
	this.context.clearRect(0,0,Configuration.width, Configuration.height);

	// TODO: put in configuration file
	//var style = Configuration.getStyleBackground();

	this.context.fillStyle = '#55aaff';
	this.context.fillRect(0,0, Configuration.width, Configuration.height);

	//this.context.fillStyle = '#aabb33';
	//this.context.fillRect(0, Configuration.getAreaPositions().reachable.y, Configuration.width, Configuration.getAreaPositions().reachable.height);

};

