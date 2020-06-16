// Открытие/закрытие окна настройки персонажа:
'use strict';
(function() {

	window.keyCodes = {
		ESC_KEYCODE: 27,
		ENTER_KEYCODE: 13,
	};


	var setutOpenButton = document.querySelector('.setup-open');
	var setutCloseButton = document.querySelector('.setup-close');
	var setup = document.querySelector('.setup');



	//Сохраняем начальное положение окна настройки
	var setupStartCords = {
		x: window.getComputedStyle(setup).left.replace(/[^\d.]/g, ''),
		y: window.getComputedStyle(setup).top.replace(/\D/g, '')
	};
	//выносим повторяющиеся блоки (закр и откр окна) в отдельные функции
	var openPopup = function() {
		setup.classList.remove('hidden');
		document.addEventListener('keydown', onPopupEscPress);


		//Задаём начальное положение окну настройки

		setup.style.top = setupStartCords.y + 'px';
		setup.style.left = setupStartCords.x + '%';
	};
	var closePopup = function() {
		setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupEscPress);
	};

	var onPopupEscPress = function(evt) {
		if (evt.keyCode === window.keyCodes.ESC_KEYCODE) {
			closePopup();
		}
	};



	//var setup = document.querySelector('.setup'); Мы использовани его выше

	// Окно.setup должно открываться по нажатию на блок.setup-open.
	// Открытие окна производится удалением класса hidden у блока
	// o Окно.setup должно закрываться по нажатию на элемент.setup-close,
	// расположенный внутри окна

	setutOpenButton.addEventListener('click', function() {
		openPopup();
	});





	//обработка открытия настройки клавишей ENTER
	setutOpenButton.addEventListener('keydown', function(evt) {
		if (evt.keyCode === window.keyCodes.ENTER_KEYCODE) {
			openPopup();
		}
	});



	setutCloseButton.addEventListener('click', function(evt) {
		closePopup();
	});
	//обработка закрытия настройки клавишей ENTER
	setutCloseButton.addEventListener('keydown',
		function(evt) {
			if (evt.keyCode === window.keyCodes.ENTER_KEYCODE) {
				closePopup();
			}
		});
})();
