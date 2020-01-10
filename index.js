var bgImageArray = ["static/lamarcus.jpg", "static/paulgeorge.jpg", "static/anthony.jpg"],
base = "",
secs = 6;

bgImageArray.forEach(function(img){
    new Image().src = base + img;
});

function backgroundSequence() {
window.clearTimeout();
	var k = 0;
	for (var i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
document.documentElement.style.backgroundSize ="cover";
			if ((k + 1) === bgImageArray.length) {
				setTimeout(function() {
					backgroundSequence() }, (secs * 1000))
			} else { k++; }
		}, (secs * 1000) * i)
	}
}
backgroundSequence();
