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
		newPin.classList.add(`js-num`);
		newPin.querySelector('img').classList.add('js-img-pin');
		newPin.querySelector('img').src = arrayElement.author.avatar;
		//положение пина
		newPin.style.left = `${arrayElement.location.x}px`;
		newPin.style.top = `${arrayElement.location.y}px`;

		return newPin;
	};


	var createPopup = function(arrayElement) {
		//создаем каркас отрисовки и копируем туда основу - шаблон
		var newPopup = popupTemplate.cloneNode(true);

		newPopup.querySelector('img').src = arrayElement.author.avatar;

		newPopup.querySelector('h3').textContent = arrayElement.offer.title;

		newPopup.querySelector('small').textContent = arrayElement.offer.address;

		newPopup.querySelector('.popup__price').textContent = `${arrayElement.offer.price}₽/ночь`;

		newPopup.querySelector('h4').textContent = window.translateTypeToText(arrayElement.offer.type);

		newPopup.querySelector('.rooms-and-guests--JS').textContent = `${arrayElement.offer.rooms} комнаты для ${arrayElement.offer.guests} гостей`;

		newPopup.querySelector('.checkin-out--JS').textContent = `Заезд после ${arrayElement.offer.checkin}, выезд до ${arrayElement.offer.checkout}`;

		var featuresArr = newPopup.querySelectorAll('.feature');
		//console.log(featuresArr);
		for (var n = 0; n< featuresArr.length; n++){
			featuresArr[n].remove();
		};
		for (var i = 0; i < arrayElement.offer.features.length; i++) {

			var feature = document.createElement('li');
			feature.classList.add('feature', `feature--${arrayElement.offer.features[i]}`);
			newPopup.querySelector('.popup__features').appendChild(feature);

		};

		newPopup.querySelector('.description--JS').textContent = arrayElement.offer.description;



		for (var j = 0; j < arrayElement.offer.photos.length; j++) {

			var photo = document.createElement('li');
			newPopup.querySelector('.popup__pictures').appendChild(photo);

			var img = document.createElement('img');
			img.src = arrayElement.offer.photos[j];
			img.style.width = `45px`;
			img.style.height = `40px`;
			img.style.margin = `2px`;
			photo.appendChild(img);

		};
		return newPopup;

	};


	window.loadedArray = [];

	window.load(function(arr) {
		// for (var i = 0; i < arr.length; i++) {
		// 	window.loadedArray[i] = arr[i];
		// }
		window.loadedArray = arr;
		//console.log(window.loadedArray);
	}, function(str) {
		window.createTextPopup(str);
	});


	// setTimeout(function () {
	// 	console.log(window.loadedArray);
	// }, 7000);




	//window.mockPinMassive = [];
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

	// window.makeMockPinMassive = function() {
	// 	for (var i = 0; i < 7; i++) {
	// 		window.mockPinMassive[i] = {
	// 			author: {
	// 				avatar: `./img/avatars/user0${i+1}.png`,
	// 			},
	// 			location: {
	// 				x: window.integerMinMax(1, 1200),
	// 				y: window.integerMinMax(140, 630),
	// 			}
	//
	// 		}
	// 		//console.log(mockPinMassive[i]);
	// 	}
	// };
	//makeMockPinMassive();

	//console.log(mockPinMassive);


	window.makeFullFragment = function(arrPin) {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < arrPin.length; i++) {
			var pin = createPinButton(arrPin[i]);
			pin.classList.add(`js-num--${i}`);
			fragment.appendChild(pin);

		}
		mapPins.appendChild(fragment);
	};

	//makeFullFragment();
	window.makeFullPopup = function(arrPopup, i) {
		var fragment = document.createDocumentFragment();

		fragment.appendChild(createPopup(arrPopup[i]));


		mapPins.appendChild(fragment);
	};



})();
