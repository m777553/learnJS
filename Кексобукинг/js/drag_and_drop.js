'use strict';;
(function() {
	//Создание ограничения площади pin - pinsOverlay
	var pinsOverlay = document.querySelector('.map__pinsoverlay');
	var map = document.querySelector('.map');


	window.adress = document.querySelector('#address');

	//Создание универсальной функции пина drag and drop

	window.initSlider = function(evt) {
		//var callback;
		var object = evt.currentTarget;

		//Оставила действие по-умолчанию - это подсветка pin
		//evt.preventDefault();
		object.style.cursor = 'pointer';
		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};

		//А нужна ли эта проверка? Если мы запускаем только при движении, например. Т.е. проверку делаем раньше
		var dragged = false;

		var onMouseMove = function(moveEvt) {
			moveEvt.preventDefault();
			//console.log('координаты по х');
			//console.log(moveEvt.clientX);
			dragged = true;

			if (map.classList.contains('map--faded')) {
				map.classList.remove('map--faded');
			}

			var shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY
			};



			// startCoords = {
			// 	x: moveEvt.clientX,
			// 	y: moveEvt.clientY
			// };


			//Добавляем ограничевающую область
			var isPinOverlay = {
				x: function() {
					if (object.offsetLeft <= 0) {
						//console.log('min');
						return 0.1;
					} else if (object.offsetLeft >= pinsOverlay.offsetWidth) {
						//console.log('max');
						return 99.9;
					}
					return 0;

				},
				y: function() {
					if (object.offsetTop <= (pinsOverlay.offsetHeight * 0.2)) {
						//console.log('min');
						return 20;
					} else if (object.offsetTop >= Math.ceil((pinsOverlay.offsetHeight * 0.9))) {
						//console.log(Math.ceil((pinsOverlay.offsetHeight*0.9)));
						//console.log(object.offsetTop);
						return 89.9;
					}
					return 0;

				},
			};
			var pinCoords = {
				x: isPinOverlay.x(),
				y: isPinOverlay.y()

			};

			if (!pinCoords.x && !pinCoords.y) {
				//console.log('уходим из нуля');
				startCoords = {
					x: moveEvt.clientX,
					y: moveEvt.clientY
				};

				object.style.top = (object.offsetTop - shift.y) + 'px';
				object.style.left = (object.offsetLeft - shift.x) + 'px';
			} else if (pinCoords.x && !pinCoords.y) {
				//оставили для верных координат
				object.style.top = (object.offsetTop - shift.y) + 'px';
				startCoords.y = moveEvt.clclientY;
				//действие для не верных координат
				//console.log(pinCoords.x);
				object.style.left = pinCoords.x + '%';
			} else if (!pinCoords.x && pinCoords.y) {
				//оставили для верных координат
				object.style.left = (object.offsetLeft - shift.x) + 'px';
				startCoords.x = moveEvt.clclientX;
				//действие для не верных координат
				//console.log(pinCoords.x);
				object.style.top = pinCoords.y + '%';
			} else
			// if (!pinCoords.x && pinCoords.y)
			{
				object.style.left = pinCoords.x + '%';
				object.style.top = pinCoords.y + '%';
			}

			//Убираем значение NaN из возвращаемых координат

			if (isNaN(shift.x)) {
				shift.x = 0;
			} else if (isNaN(shift.y)) {
				shift.y = 0;
			}

			//То что мы планируем возвращать, если слайдер универсальный
			window.changedLvl = {
				x: Math.round((object.offsetLeft - shift.x) * 100) / 100,
				y: Math.round((object.offsetTop - shift.y) * 100) / 100
			};




			if (window.changedLvl.x <= 0) {
				window.changedLvl.x = 1;
			} else if (window.changedLvl.x >= 1201) {
				window.changedLvl.x = 1200;
			} else if (window.changedLvl.y < 140) {
				window.changedLvl.y = 140;
			} else if (window.changedLvl.y > 630) {
				window.changedLvl.y = 630;
			}

			window.adress.value = `${window.changedLvl.x};${window.changedLvl.y}`;
			//console.log(window.changedLvl.x + ';' + window.changedLvl.y);

		};

		var onMouseUp = function(upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);



			//выгружать значения надо при отпускании мыши ЕСЛИ она двигалась
			if (dragged) {
				window.isAbleSite();

				// for (var i = 0; i < window.formElements.length; i++) {
				// 	window.formElements[i].removeAttribute("disabled", "disabled");
				// }
				// document.querySelector('.notice__form').classList.remove('notice__form--disabled');
				//console.log(window.changedLvl.x + ';' + window.changedLvl.y);
			}
			// if (dragged) {
			//   var onClickPreventDefault = function (evt) {
			//     evt.preventDefault();
			//     dialogHandler.removeEventListener('click', onClickPreventDefault)
			//   };
			//   dialogHandler.addEventListener('click', onClickPreventDefault);
			// }

		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);


	};





	//console.log(window.changedLvl.x + ';' + window.changedLvl.y);




})();
