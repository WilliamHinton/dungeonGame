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
		
		this.interval = setInterval(updateGameArea, 20);
	},
	
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function entity(entityWidth, entityHeight, entityColor, x, y){
	this.entityWidth = entityWidth;
	this.entityHeight = entityHeight;
	this.x = x;
	this.y = y;
	
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = entityColor;
		ctx.fillRect(this.x, this.y, this.entityWidth, this.entityHeight);
	}
}

function updateGameArea(){
    myGameArea.clear();
    player.x += 1;
    player.update();
}