'use strict';;
(function() {
	var ESC_KEYCODE = 27;
	var mapPins = document.querySelector('.map__pins');

	var onPinClick = function(evt) {
		evt.preventDefault();
		//console.log(evt.target);

		if (evt.target.classList.contains('js-img-pin')) {
			var num = evt.target.closest('button').getAttribute('class');

			num = num.replace(/\D+/g, "");
			console.log(evt.currentTarget);
			if (evt.currentTarget.lastChild.matches('.map__card')
				// var popup = document.querySelector('.map__card')
			) {
				console.log('pop');
				evt.currentTarget.lastChild.remove();
			}
			//ОТКЛЮЧИЛА удаляем обработчик, если попап открыт. Вернём при закрытии
			// mapPins.removeEventListener('click', onPinClick);
			window.makeFullPopup(window.loadedArray, num);
			document.addEventListener('keydown', onPopupEscPress);

			//Закрытие на крестик
			evt.currentTarget.lastChild.querySelector('.popup__close').addEventListener('click', closePopup);

		}
	};


	var closePopup = function() {
		var popup = document.querySelector('.map__card');
		popup.remove();
		document.removeEventListener('keydown', onPopupEscPress);
	};

	var onPopupEscPress = function(evt) {
		if (evt.keyCode === ESC_KEYCODE) {
			closePopup();
		}
	};


	mapPins.addEventListener('click', onPinClick);









	// setTimeout(function () {
	// window.makeFullPopup(window.loadedArray,7
	// );},1000);
	//;







})();
