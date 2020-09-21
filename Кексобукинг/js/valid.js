'use strict';;
(function() {

	var price = document.querySelector('#price');
	var type = document.querySelector('#type');
	var price = document.querySelector('#price');
	var timein = document.querySelector('#timein');
	var timeout = document.querySelector('#timeout');
	var room_number = document.querySelector('#room_number');
	var capacity = document.querySelector('#capacity');


	var isPriceMismach = function(inputValue) {
		switch (inputValue) {
			case (type.value == 'palace' && inputValue < 10000):
				return true;
				break;
			case (type.value == 'house' && inputValue < 5000):
				return true;
				break;
			case (type.value == 'flat' && inputValue < 1000):
				return true;
				break;
			default:
				return false;
		};
	};

	var isTypePlaceholder = function(evt) {
		console.log(evt.target.value == 'palace');
		switch (evt.target.value) {
			case (evt.target.value == 'palace'):
				price.setAttribute('min', 10000);
				price.setAttribute('placeholder', '10000');
				break;
			case (evt.target.value == 'house'):
				price.placeholder = '5000';
				break;
			case (evt.target.value == 'flat'):
				price.placeholder = '1000';
				break;
			case (evt.target.value == 'bungalo'):
				price.placeholder = '0';
				break;
			// default:
			// price.setAttribute('min', 999);
			// price.setAttribute('placeholder', '999');

		};
	};

	type.addEventListener('change', isTypePlaceholder);



})();
