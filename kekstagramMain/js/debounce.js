'use strict';
(function () {
  // var DEBOUNCE_INTERVAL = 500; // ms
	//
  // window.debounce = function (fun) {
  //   var lastTimeout = null;
	// 	console.log('debounce');
  //   return function() {
  //     var args = arguments;
  //     if (lastTimeout) {
  //       window.clearTimeout(lastTimeout);
  //     }
  //     lastTimeout = window.setTimeout(function() {
  //       fun.apply(null, args);
  //     }, DEBOUNCE_INTERVAL);
  //   };
	//
  // }

	var DEBOUNCE_INTERVAL = 300;

  var lastTimeout;


  var debounce = function (callback) {
		//console.log('deb inside');
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(callback, DEBOUNCE_INTERVAL);
  };


  window.debounce = debounce;




})();
