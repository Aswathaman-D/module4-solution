(function (window) {
	var GoodByeSpeaker = {};
	var Speakword ="Good Bye";

	GoodByeSpeaker.speak =  function(name) {
		console.log(Speakword + " " + name);
	
	}

	window.GoodByeSpeaker = GoodByeSpeaker ;

})(window);