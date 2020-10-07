'use strict';;
(function() {

	var resetBtn = document.querySelector('.form__reset');

	var form = document.querySelector('.notice__form');

	var pin = document.querySelector('.map__pin');

	window.onResetClick = function(evt) {
		evt.preventDefault();

		form.reset();
		pin.style.left = '600px';
		pin.style.top = '375px';

		window.adress.value = '375; 600';

		//window.adress.value = `${window.changedLvl.x};${window.changedLvl.y}`;
	};


	resetBtn.addEventListener('click', window.onResetClick);









})();
