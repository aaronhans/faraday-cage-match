var fallTimer;

function beginInteraction() {
	if(!playBegun) {
		playBegun = true;
		stage.removeChild(textSample);
		init();
	} else {
		if(gameOver) {
			//hide score display
			stage.removeChild(scoreDisplay);
			restart();
		} else {
			clearTimeout(fallTimer);
			jump();
		}
	}
}
function onTouchStart(event)
{
	event.preventDefault();
	beginInteraction();
}
function onClick(event)
{
	beginInteraction();
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

function letterCollision() {
	
	for (var i = 0; i < lettersInPlay.length; i++) 
	{
		var letter = lettersInPlay[i];
		var xdist = letter.position.x - hero.position.x + hero.width;
		if(xdist > -letter.width && xdist < letter.width)
		{
			var ydist = letter.position.y - hero.position.y + hero.width/2;
		
			if(ydist > -letter.height && ydist < letter.height)
			{
				lettersCollected.push(letter.last.text);
				myLetters.setText(lettersCollected.toString());
				lettersInPlay.splice(i,1);
				stage.removeChild(letter);
				if(lettersCollected.length == 8) {
					gameOver = true;
					scoreGame();
				}
			}
		}
	}	
}