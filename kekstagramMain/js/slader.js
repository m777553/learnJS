'use strict';
(function() {
	//_________________________________________________
	// В этом задании мы закончим работу над слайдером, задающим глубину эффекта,
	// заставив его перемещаться.
	// Теперь, когда вы знакомы с тем, как работает механизм перетаскивания
	// элементов, вы можете закончить работу над слайдером.
	// Вам нужно описать полный цикл Drag n Drop для пина маркера, то есть добавить
	// обработчики событий mousedown, mousemove и mouseup на маркер.
	// Обработчики mousemove и mouseup должны добавляться только при вызове
	// обработчика mousedown.
	// Обработчик mousemove должен запускать логику изменения положения пина: в нём
	// должны вычисляться новые координаты пина на основании смещения,
	// применяться через стили к элементу и записываться в поле уровня эффекта
	// (с поправкой на то, что в это поле записываются координаты середины пина).
	// При перемещении, кроме состояния слайдера, должна меняться глубина
	// эффекта, наложенного на изображение, то есть меняться значение CSS-фильтра,
	// добавленного на изображение. Это нетривиальная задача, потому что значение
	// CSS-фильтра записывается в одних границах, а положение слайдера в других.
	// Вам нужно использовать пропорцию, чтобы рассчитать насыщенность правильно.
	// Учтите, что расчёт координат пина и их запись в поле должны дублироваться
	// и в обработчике mouseup, потому что в некоторых случаях, пользователь может
	// нажать мышь на слайдере, но никуда его не переместить.
	// Ещё один момент касается ограничения перетаскивания: не забудьте сделать так,
	// чтобы слайдер можно было двигать только горизонтально и при этом движение
	// должно быть ограничено пределами слайдера.



	var pinHendler = document.querySelector('.effect-level__pin');
	var pinLine = document.querySelector('.effect-level__line');
	var effectLevel = document.querySelector('.effect-level__depth');
	var effectLevelLine = document.querySelector('.effect-level__line');


	var onMouseDown = function(evt) {
		evt.preventDefault();
		var dragged = false;
		//getComputedStyle(pinHendler).cursor = 'pointer';
		pinHendler.style.cursor = 'pointer';
		var effectLevelLineWidth = getComputedStyle(effectLevelLine).width;

		var startCords = {
			x: evt.clientX
		};

		//Попробуем установить эффект
		var imgPreview = document.querySelector('.img-upload__preview');
		//Находим, какой эффект использовали
		var effectCheckedName = document.querySelector('input[type="radio"]:checked').value;


		var changeEffect20 = function(effectCheckedName, imgPreview) {
			switch (effectCheckedName) {
				case 'chrome':
					imgPreview.style.filter = 'grayscale(0.2)';
					break;
				case 'sepia':
					imgPreview.style.filter = 'sepia(0.2)';
					break;
				case 'marvin':
					imgPreview.style.filter = 'invert(20%)';
					break;
				case 'phobos':
					imgPreview.style.filter = 'blur(0.6px)';
					break;


				default:
					imgPreview.style.filter = 'brightness(0.6)';
			}
		};
		var changeEffect = function(effectCheckedName, imgPreview, intensive) {
			if (intensive == 'undefine') {
				intensive = 0.2;
			}
			switch (effectCheckedName) {
				case 'chrome':

					imgPreview.style.filter = `grayscale(${intensive})`;
					//console.log(imgPreview.style.filter);
					break;
				case 'sepia':
					imgPreview.style.filter = `sepia(${intensive})`;
					break;
				case 'marvin':
					imgPreview.style.filter = `invert(${intensive*100}%)`;

					break;
				case 'phobos':
					imgPreview.style.filter = `blur(${intensive*3}px)`;

					break;


				default:
					imgPreview.style.filter = `brightness(${intensive*2+1})`;
					//console.log(imgPreview.style.filter);
			}
		};

		var onMouseMove = function(moveEvt) {
			moveEvt.preventDefault();
			dragged = true;

			// var newStartCords = {
			// 	x: evt.clientX
			// };

			var shift = {
				x: startCords.x - moveEvt.clientX

			};
			//функция, которая возращает доли интенсивности эффекта
			var isEffectLevel = function() {
				if (pinHendler.offsetLeft - shift.x <= 0) {
					return 0;

				} else if (((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100) >= 100) {
					return 1;
				} else {

					return Math.round(((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth) * 100) / 100;

				}
			};


			if (((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100) <= 0) {
				pinHendler.style.left = 0 + '%';

			} else if (((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100) >= 100) {
				pinHendler.style.left = 100 + '%';
			} else {
				startCords = {
					x: moveEvt.clientX
				};
				pinHendler.style.left = (pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100 + '%';
				effectLevel.style.width = (pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100 + '%';
			}
			//console.log(isEffectLevel());
			changeEffect(effectCheckedName, imgPreview, isEffectLevel());
			//console.log(isEffectLevel());

			// TODO:
			//отрисовываем новое положение
			// if (pinHendler.offsetLeft < 0) {
			// 	shift.x = 0;
			// 	pinHendler.offsetLeft = 1;
			// } else if (pinHendler.offsetLeft > effectLevelLine.offsetWidth) {
			// 	shift.x = 0;
			// }

			// console.log(pinHendler.offsetLeft + " startCords " + startCords.x);
			// console.log('evt.clientX' + evt.clientX + " moveEvt.clientX " + moveEvt.clientX);


		};

		var onMouseUp = function(upEvt) {
			upEvt.preventDefault();
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
			//Если пин не переместили, апросто оставили на 20%
			if (!dragged && pinHendler.style.left == '20%') {
				//console.log(pinHendler.style.left);

				//удаляем класс с интенсивностью эффекта 100%
				imgPreview.classList.remove(imgPreview.classList[1]);
				changeEffect(effectCheckedName, imgPreview);
			}
		};
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);

	};

	pinHendler.addEventListener('mousedown', onMouseDown);






	//Дублирую код   --> Выбор фильтра при нажатии на мини изображение

	var effectsList = document.querySelector('.effects__list');
	var imgPreview = document.querySelector('.img-upload__preview');

	var onEffectClick = function(evt) {
		var effectTanger = evt.target;

		if (effectTanger.matches('.effects__preview')) {
			if (imgPreview.classList.length == 2) {
				imgPreview.classList.remove(imgPreview.classList[1]);


			}

			//NEW
			//При переходе между эффектами сброс на 20%
			pinHendler.style.left = 20 + '%';
			effectLevel.style.width = 20 + '%';


			imgPreview.classList.add(effectTanger.classList[1]);
			//обнуление стиля фильтра при переключении между эффектами
			imgPreview.style.filter = '';
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
