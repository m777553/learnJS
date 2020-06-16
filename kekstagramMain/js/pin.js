'use strict';
// Добавим на пин слайдера .scale__pin обработчик события mouseup, который будет
// согласно ТЗ изменять уровень насыщенности фильтра для изображения. Для
// определения уровня насыщенности, нужно рассчитать положение пина слайдера
// относительно всего блока и воспользоваться пропорцией, чтобы понять, какой
// уровень эффекта нужно применить.
// Обратите внимание, что при переключении фильтра, уровень эффекта должен
// сразу cбрасываться до начального состояния, т.е. логика по определению уровня
// насыщенности должна срабатывать не только при «перемещении» слайдера,
// но и при переключении фильтров.
(function() {


	var effectLevelPin = document.querySelector('.effect-level__pin');

	var onMouseDown = function(evt) {
		evt.preventDefault();
		var startCords = {
			x: evt.clientX,
			y: evt.clientY
		};
	}
	//effectLevelPin.addEventListener('mousedown', onMouseDown(evt));


	var onMouseUp = function(evt) {
		var endCords = {
			x: evt.clientX,
			y: evt.clientY
		};

	}
	//effectLevelPin.addEventListener('mouseup', onMouseUp(evt));

	// Если же стиль задан в CSS, то element.style.backgroundColor ничего не вернёт.
	// Чтобы всё заработало, нужно запросить просчитанные стили:
	//
	// element = document.getElementById('foo');
	// color = window.getComputedStyle(element).backgroundColor;



	//Выбор фильтра при нажатии на мини изображение

	var effectsList = document.querySelector('.effects__list');
	var imgPreview = document.querySelector('.img-upload__preview');

	var onEffectClick = function(evt) {
		var effectTanger = evt.target;

		if (effectTanger.matches('.effects__preview')) {
			if (imgPreview.classList.length == 2) {
				imgPreview.classList.remove(imgPreview.classList[1])
			}
			imgPreview.classList.add(effectTanger.classList[1]);
			//Скрываем ползунок на оригинальном фото
			if (effectTanger.classList.contains('effects__preview--none')) {
				document.querySelector('.effect-level').classList.add('hidden');
			} else {
				document.querySelector('.effect-level').classList.remove('hidden');
			}
			//document.getComputedStyle(imgPreview).backgroundColor = 'black';
			evt.stopPropagation();
		}
		// alert(evt.target);
		// evt.stopPropagation();

	};
	effectsList.addEventListener('click', onEffectClick);
})();
