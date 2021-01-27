(function(window){
 
 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];	
for (var i in names) {
	var firstletter = names[i].charAt(0);
	 if (firstletter.toLowerCase() == 'j')
	 {
		window.GoodByeSpeaker.speak(names[i]);
		
	}
	else
	{
		window.helloSpeaker.speak(names[i]);
}
}
})(window);