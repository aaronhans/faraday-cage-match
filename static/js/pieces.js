function init() {

	if(playBegun) {

		/* hero
		hero = new PIXI.Text("*", {font: "bold 124px Arial", fill: "orange", align: "left"});
		//asterisks are super characters, may be easier to get a graphic to use this
		*/
		var texture = PIXI.Texture.fromImage("img/gearHeart.png");
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
			var xPos = i * 100 + 500; //parseInt(Math.random() * stageWidth * screens);
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