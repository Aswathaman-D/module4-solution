//assignment
(function (window) {
	var helloSpeaker = {};
	var Speakword ="Hello";

	helloSpeaker.speak =  function (name) {
		console.log(Speakword + " " + name);
	
	}
	window.helloSpeaker = helloSpeaker;

})(window);