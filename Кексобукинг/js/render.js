'use strict';;
(function() {

	window.integerMinMax = function(min, max) {
		return Math.round(Math.random() * (max - min) + min)
	};

	var mapPins = document.querySelector('.map__pins')

	var popupTemplate = document.querySelector('template').content.querySelector('.map__card');

	var pinTemplate = document.querySelector('template').content.querySelector('.map__pin');




	var createPinButton = function(arrayElement) {
		//создаем каркас отрисовки и копируем туда основу - шаблон
		var newPin = pinTemplate.cloneNode(true);
		//аватарка
		newPin.querySelector('img').src = arrayElement.author.avatar;
		//положение пина
		newPin.style.left = `${arrayElement.location.x}px`;
		newPin.style.top = `${arrayElement.location.y}px`;

		return newPin;
	};

	var mockPinMassive = [];
	//Как должен выглядеть элемент
	// var mockPinElement = {
	// 	author: {
	// 		avatar: "img/avatars/user01.png",
	// 	},
	// 	location: {
	// 		x: 428,
	// 		y: 493,
	// 	}
	//
	// };

	var makeMockPinMassive = function() {
		for (var i = 0; i < 7; i++) {
			mockPinMassive[i] = {
				author: {
					avatar: `./img/avatars/user0${i+1}.png`,
				},
				location: {
					x: window.integerMinMax(1, 1200),
					y: window.integerMinMax(140, 630),
				}

			}
			//console.log(mockPinMassive[i]);
		}
	};
	makeMockPinMassive();

	//console.log(mockPinMassive);


	var makeFullFragment = function() {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < 7; i++) {
			fragment.appendChild(createPinButton(mockPinMassive[i]));

		}
		mapPins.appendChild(fragment);
	}

	makeFullFragment();




})();
