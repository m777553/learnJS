'use strict';;
(function() {

	var resetBtn = document.querySelector('.form__reset');

	var form = document.querySelector('.notice__form');

	var pin = document.querySelector('.map__pin');

	var onResetClick = function(evt) {
		evt.preventDefault();
		form.reset();
		pin.style.left = 50 + '%';
		pin.style.top = 50 + '%';

		window.adress.value = '300;600';

			//window.adress.value = `${window.changedLvl.x};${window.changedLvl.y}`;
	};


	resetBtn.addEventListener('click', onResetClick);









})();
