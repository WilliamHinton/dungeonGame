/**
 * 
 */
var player;
var canvasWidth = 800;
var canvasHeight = 400;

function startGame(){
	myGameArea.start();
	player = new entity(10, 10, "red", 10, canvasHeight / 2);
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
	    this.canvas.width = canvasWidth;
	    this.canvas.height = canvasHeight;
	    this.context = this.canvas.getContext("2d");
	    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
}

function entity(entityWidth, entityHeight, entityColor, spawnX, spawnY){
	this.entityWidth = entityWidth;
	this.entityHeight = entityHeight;
	this.spawnX = spawnX;
	this.spawnY = spawnY;
	
    ctx = myGameArea.context;
    ctx.fillStyle = entityColor;
    ctx.fillRect(this.spawnX, this.spawnY, this.entityWidth, this.entityHeight);
}