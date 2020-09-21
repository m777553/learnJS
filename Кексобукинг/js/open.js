'use strict';;
(function() {
	var map = document.querySelector('.map');

	map.classList.add('map--faded');

	window.formElements = document.querySelectorAll('.form__element');
	//console.log(formElements);
	//Пример
								// element.setAttribute(name, value);
								// name - имя атрибута (строка).
								// value  - значение атрибута.
	for (var i = 0; i < window.formElements.length; i++) {
		window.formElements[i].setAttribute("disabled", "disabled");
	}









})();
