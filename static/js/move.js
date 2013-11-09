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
	falling = false;
	jumping = true;
}

var falling = false;
function fall() {
	console.log('back down please')
	jumping = false;
	falling = true;
}
