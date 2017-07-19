//creates entities

function entity(entityWidth, entityHeight, entityColor, x, y){
	this.entityWidth = entityWidth;
	this.entityHeight = entityHeight;
	this.x = x;
	this.y = y;
    this.speedX = 0;
    this.speedY = 0;
	
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = entityColor;
		ctx.fillRect(this.x, this.y, this.entityWidth, this.entityHeight);
	}
	
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    } 
}