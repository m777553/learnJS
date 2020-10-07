'use strict';;
(function() {

	window.isDisableSite = function() {
		var map = document.querySelector('.map');

		map.classList.add('map--faded');



		var pin = map.querySelector('.map__pin--main');
		pin.style.left = '600px';
		pin.style.top = '375px';
		document.querySelector('.notice__form').reset();

		if (map.querySelector('.js-num')) {
			window.clearPin();
		}

		document.querySelector('.notice__form').classList.add('notice__form--disabled');


		window.formElements = document.querySelectorAll('.form__element');
		//console.log(formElements);
		//Пример
		// element.setAttribute(name, value);
		// name - имя атрибута (строка).
		// value  - значение атрибута.
		for (var i = 0; i < window.formElements.length; i++) {
			window.formElements[i].setAttribute("disabled", "disabled");
		}



	};



	//
	// if (map.classList.contains('map--faded')) {
	// 	map.classList.remove('map--faded');
	// }
	window.isAbleSite = function() {
		//console.log(window.loadedArray);
		//рисуем пины скаченные с сервера
		window.makeFullFragment(window.loadedArray);
		//Делаем недоступными поля формы
		for (var i = 0; i < window.formElements.length; i++) {
			window.formElements[i].removeAttribute("disabled", "disabled");
		}
		document.querySelector('.notice__form').classList.remove('notice__form--disabled');

	};


	window.isDisableSite();




})();
