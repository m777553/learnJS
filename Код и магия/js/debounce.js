'use strict';
(function() {

	var DEBAUNCE_INTERVAL = 300;
	var lastTimeout = null;
	window.debounce = function(fun) {
		// console.log('debounce');
		if (lastTimeout) {
			window.clearTimeout(lastTimeout);

		}
		lastTimeout = window.setTimeout(fun, 300);




	//	var lastTimeout = null;
		// return function() {
// 	var args = arguments;
// 	if (lastTimeout) {
// 		window.clearTimeout(lastTimeout);
//
// 	}
// 	lastTimeout = window.setTimeout(function() {
// 		fun.apply(null, args);
// 	}, DEBAUNCE_INTERVAL);
// };
	};


})();
