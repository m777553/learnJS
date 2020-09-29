'use strict';;
(function() {

	var price = document.querySelector('#price');
	var type = document.querySelector('#type');
	var price = document.querySelector('#price');
	var timein = document.querySelector('#timein');
	var timeout = document.querySelector('#timeout');
	var room_number = document.querySelector('#room_number');
	var capacity = document.querySelector('#capacity');

	//Не используется, так как вся проверка делается на уровне браузера выставлением минимальных значений
	// var isPriceMismach = function(inputValue) {
	// 	switch (inputValue) {
	// 		case (type.value == 'palace' && inputValue < 10000):
	// 			return true;
	// 			break;
	// 		case (type.value == 'house' && inputValue < 5000):
	// 			return true;
	// 			break;
	// 		case (type.value == 'flat' && inputValue < 1000):
	// 			return true;
	// 			break;
	// 		default:
	// 			return false;
	// 	};
	// };

	var setTypePlaceholder = function(evt) {
		//console.log(evt.target.value == 'palace');
		switch (evt.target.value) {
			case ('palace'):
				price.setAttribute('min', 10000);
				price.setAttribute('placeholder', '10000');
				break;
			case ('house'):
				price.setAttribute('placeholder', '5000');
				price.setAttribute('min', 5000);
				break;
			case ('flat'):
				price.setAttribute('placeholder', '1000');
				price.setAttribute('min', 1000);
				break;
			case ('bungalo'):
				price.setAttribute('placeholder', '0');
				price.setAttribute('min', 0);
				break;
				// default:
				// price.setAttribute('min', 999);
				// price.setAttribute('placeholder', '999');

		};
	};

	type.addEventListener('change', setTypePlaceholder);


	//Синхранизачия времень въезда/выезда

	timein.addEventListener('change', function(evt) {
		timeout.value = evt.target.value;
	});

	timeout.addEventListener('change', function(evt) {
		timein.value = evt.target.value;
	});


	//Проверка соответствия количества комнат гостям


	var isMatchRoomAndPersons = function(evt) {
		switch (evt.target.value) {
			case '100':
				if (capacity.value == '0') {
					//console.log('значение для 100 комнат - без гостей');
					return false;
				} else {
					return true
				};
				break;
			case '1':
			case '2':
			case '3':
				if ((capacity.value <= evt.target.value) && (capacity.value != 0)) {
					//console.log(false);
					return false
				} else {
					return true
				};

				break;
		}
	};

	var isMatchPersonsAndRooms = function(evt) {
		//var result = true;
		//console.log(result);
		switch (evt.target.value) {

			case '0':
				if (room_number.value == '100') {
					console.log('значение для 100 комнат - без гостей');
					return false;
				} else {
					return true;
				};
				//
				break;
			case '1':
			case '2':
			case '3':
				if ((room_number.value >= evt.target.value) && (capacity.value != 0)) {
					//console.log(room_number.value + " for " + capacity.value + ' pers');
					return false;

					//console.log(result);
				} else {
					//console.log('here');
					return true;

				};

				break;
		}
		//console.log(result);
		//return result;
	};

	var isBadInput = function(evt) {
		if (isMatchRoomAndPersons(evt)) {
			//	console.log(isMatchRoomAndPersons);
			room_number.setCustomValidity('Комнаты рассчитывают из количтва одна на человека. 100 комнат - не для заселения');
			room_number.classList.add('bad-input__JS');
			//console.log(1);
		} else if (isMatchPersonsAndRooms(evt)) {
			capacity.setCustomValidity('Комнаты рассчитывают из количтва одна на человека. 100 комнат - не для заселения');
			capacity.classList.add('bad-input__JS');
			//console.log(2);
			//console.log(room_number.value + " for " + capacity.value + ' pers');
		} else {
			// console.log(3);
			// console.log((capacity.value <= evt.target.value) && (capacity.value != 0));
			// console.log(room_number.value + " for " + capacity.value + ' pers');
			room_number.setCustomValidity('');
			capacity.setCustomValidity('');
			room_number.classList.remove('bad-input__JS');
			capacity.classList.remove('bad-input__JS');

		}
	};



	room_number.addEventListener('input', isBadInput);
	capacity.addEventListener('input', isBadInput);









})();
