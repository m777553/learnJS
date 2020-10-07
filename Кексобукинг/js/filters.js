'use strict';;
(function() {
var mapFiltersForm = document.querySelector('.map__filters');

var filters = {
	type: mapFiltersForm.querySelector('#housing-type'),
	price: mapFiltersForm.querySelector('#housing-price'),
	rooms: mapFiltersForm.querySelector('#housing-rooms'),
	guests: mapFiltersForm.querySelector('#housing-guests'),
	features: mapFiltersForm.querySelector('#housing-features'),

};

	setTimeout(function() {
		var loadedArrayCopy = window.loadedArray.slice();
		console.log(loadedArrayCopy);
	}, 5000);







})();
