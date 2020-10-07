'use strict';;
(function() {
	window.clearPin = function() {
		var pins = [];
		pins = document.querySelectorAll('.js-num');
		for (var i = 0; i < pins.length; i++) {
			pins[i].remove();
		}
	};


})();
