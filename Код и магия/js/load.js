'use strict';
(function() {
	var URL = 'https://javascript.pages.academy/code-and-magick/data';
	window.load = function(onSuccess, onError) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.addEventListener('load', function() {
			onSuccess(xhr.response);
		});
		xhr.open('GET', URL);
		xhr.send();
	};

})();
