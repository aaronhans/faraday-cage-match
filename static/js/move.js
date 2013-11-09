var fallTimer;

function onTouchStart(event)
{
	event.preventDefault();
	clearTimeout(fallTimer);
	jump();
}
function onClick(event)
{
	clearTimeout(fallTimer);
	jump();
}
function onTouchEnd(event)
{
	event.preventDefault();
	var fallTimer = setTimeout(fall,500);
}
function onRelease(event)
{
	var fallTimer = setTimeout(fall,500);
}

var jumping = false;
function jump() {
	rotating = false;
	falling = false;
	jumping = true;
}

var falling = false;
function fall() {
	rotating = false;
	jumping = false;
	falling = true;
}

function letterCollision(lettersInPlay) {
	
	for (var i = 0; i < lettersInPlay.length; i++) 
	{
		var letter = lettersInPlay[i]
		if(letter.isPickedUp)continue;
		var xdist = letter.position.x - hero.position.x;
		if(xdist > -letter.width/2 && xdist < letter.width/2)
		{
			var ydist = letter.position.y - hero.position.y;
		
			if(ydist > -letter.height/2 && ydist < letter.height/2)
			{
				//this.engine.pickupManager.removePickup(i);
				//this.engine.pickup();
				lettersCollected.push(letter.last.text);
				lettersInPlay.splice(i,1);
				stage.removeChild(letter);
			}
		}
	}	
}