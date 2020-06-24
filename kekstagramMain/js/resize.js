'use strict';

(function() {

	var scaleControl = {
		smaller: document.querySelector('.scale__control--smaller'),
		bigger: document.querySelector('.scale__control--bigger'),
		value: document.querySelector('.scale__control--value'),
	};

	var imgUploadPrevview = document.querySelector('.img-upload__preview');

	var onScaleBtnSmallerClick = function() {
		if (scaleControl.value.value !== '25%') {
			imgUploadPrevview.style.scale = (scaleControl.value.value.replace(/\D/g, '') - 25) / 100;
			scaleControl.value.value = `${scaleControl.value.value.replace(/\D/g,'')-25}%`;

		}

	};

	var onScaleBtnBiggerClick = function() {
		if (scaleControl.value.value !== '100%') {
			var num = +scaleControl.value.value.replace(/\D/g, '');
			imgUploadPrevview.style.scale = (num + 25) / 100;
			//console.log(num + 25);
			scaleControl.value.value = `${num+25}%`;

		}

	};
	scaleControl.smaller.addEventListener('click', onScaleBtnSmallerClick);
	scaleControl.bigger.addEventListener('click', onScaleBtnBiggerClick);






})();





// Масштаб:
// При нажатии на кнопки .resize__control--minus и .resize__control--plus должно
// изменяться значение поля .resize__control--value .
// Значение должно изменяться с шагом в 25. Например, если значение поля установлено
// в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное
// значение — 100%, минимальное — 25%. Значение по умолчанию — 100%.
// При изменении значения поля .resize__control--value изображению .imgupload__preview должен добавляться соответствующий стиль CSS, который с помощью
// трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%,
// то в стиле изображения должно быть написано transform: scale(0.75) .
