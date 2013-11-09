

function makeLetter(letter,xPos,yPos) {

	var sprite = PIXI.Sprite.fromImage("img/tile.png");
	sprite.height = 50
	sprite.width = 50
	sprite.position.x = xPos;
	sprite.position.y = yPos;
	sprite.anchor.x = 0;
	sprite.anchor.y = 0;

	var text = new PIXI.Text(letter);
	text.anchor.x = -0.15;
	text.anchor.y = 0.05;
	text.setStyle({font:"bold 128px Arial", fill:"black"});

	sprite.addChild(text)
	console.log(sprite)
	return sprite;

}