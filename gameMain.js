/**
 * 
 */
var player;
var canvasWidth = 800;
var canvasHeight = 400;

function startGame(){
	myGameArea.start();
	player = new entity(10, 10, "aqua", 10, canvasHeight / 2);
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
	    this.canvas.width = canvasWidth;
	    this.canvas.height = canvasHeight;
	    this.context = this.canvas.getContext("2d");
	    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		
		this.interval = setInterval(updateGameArea, 20);
		
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false; 
        })
	},
	
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}


function updateGameArea(){
    myGameArea.clear();
    player.speedX = 0;
    player.speedY = 0; 
    if (myGameArea.keys && myGameArea.keys[37]) {player.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {player.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {player.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {player.speedY = 1; }
    player.newPos();
    player.update();
}