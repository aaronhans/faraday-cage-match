function onTouchStart(event)
{
	event.preventDefault();
	jump();
}
function onClick(event)
{
	jump();
}
function onTouchEnd(event)
{
	event.preventDefault();
	fall();
}
function onRelease(event)
{
	fall();
}

var jumping = false;
function jump() {
	console.log('jumpin')
	rotating = false;
	falling = false;
	jumping = true;
}

var falling = false;
function fall() {
	console.log('back down please')
	rotating = false;
	jumping = false;
	falling = true;
}

function letterCollision(lettersInPlay) {
	
	for (var i = 0; i < lettersInPlay.length; i++) 
	{
		var letter = lettersInPlay[i]
		if(letter.isPickedUp)continue;
		var xdist = letter.position.x - steve.position.x;
		if(xdist > -letter.width/2 && xdist < letter.width/2)
		{
			var ydist = letter.position.y - steve.position.y;
		
			if(ydist > -letter.height/2 && ydist < letter.height/2)
			{
				this.engine.pickupManager.removePickup(i);
				this.engine.pickup();
			}
		}
	}	
}