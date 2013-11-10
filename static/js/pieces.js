function ajax(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    callback(xmlhttp.responseText);
	  }
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function init() {

	if(playBegun) {

		/* hero
		hero = new PIXI.Text("*", {font: "bold 124px Arial", fill: "orange", align: "left"});
		//asterisks are super characters, may be easier to get a graphic to use this
		*/
		var texture = PIXI.Texture.fromImage("img/gearheart_circle.png");
		hero = new PIXI.Sprite(texture);

		hero.anchor.x = 0.5;
		hero.anchor.y = 0.5;
		hero.position.x = 50;
		hero.position.y = stageHeight - 68;	
		stage.addChild(hero);

		//all the letters
		for(var i = 0;i<20;i++) {
			var letter = alphabet[parseInt(Math.random() * alphabet.length)];
			var yPos = parseInt(Math.random() * (stageHeight - 200) + 100);
			var xPos = i * 100 + 300; //parseInt(Math.random() * stageWidth * screens);
			lettersInPlay.push(makeLetter(letter,xPos,yPos));
			stage.addChild(lettersInPlay[lettersInPlay.length -1]);
		}

		//ground
		midTexture = PIXI.Texture.fromImage("img/bg-midsml.png");
		mid = new PIXI.TilingSprite(midTexture, 512, 256);
		mid.position.x = 0;
		mid.position.y = stageHeight - 50;
		mid.tilePosition.x = 0;
		mid.tilePosition.y = 0;
		stage.addChild(mid);

		myLetters = new PIXI.Text("", {font: "bold 22px Arial", fill: "black", align: "left"});
		myLetters.position.y = stageHeight - 35;
		myLetters.position.x = 20;
		stage.addChild(myLetters);

		requestAnimFrame( animate );
	}	
}

function clearPieces() {
	for(var i = 0;i<lettersInPlay.length;i++) {
		var letter = lettersInPlay[i];
		stage.removeChild(letter);
	}
	lettersInPlay = [];
	stage.removeChild(hero);
	renderer.render(stage);	
}

function restart() {
	lettersCollected = [];
	myLetters.setText("");	
	renderer.render(stage);

	gameOver = false;
	init();
}

function scoreGame() {
	clearPieces();
	//display retrieving score
	var retrieveText = "Retrieving score...";
	scoreDisplay = new PIXI.Text(retrieveText, {font: "bold 24px Arial", fill: "white", align: "left"});
	scoreDisplay.position.x = 20;
	scoreDisplay.position.y = 20;
	stage.addChild(scoreDisplay);
  renderer.render(stage);

	//submit letters
	ajax('/lookup?letters='+lettersCollected.toString().replace(/,/g,''),function(result) {
		console.log(result);
		scoreDisplay.setText('Score: '+JSON.parse(result).score);
		renderer.render(stage);
		//store this info
	})
}
