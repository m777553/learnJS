// 17 Учебный проект: в движении
// Задача
// Добавить интерактивности на страницу. Сделать диалог редактирования
// персонажа перетаскиваемым (draggable)
// В модуле для работы с диалогом (dialog.js) реализуйте возможность
// перетаскивания диалога:
// • Диалог должен начинать двигаться за курсором мыши при нажатии
// (mousedown) на блок .setup-user-pic;
// • Диалог должен переставать двигаться за курсором мыши при отпускании
// (mouseup) кнопки мыши и оставаться на новом месте;
// • При повторном открытии/закрытии диалога, положение диалога должно
// сбрасываться на изначальное;
'use strict';


(function () {


var dialogHander = document.querySelector('.upload');
var setup = document.querySelector('.setup');

dialogHander.addEventListener('mousedown', function(evt) {
	evt.preventDefault();

	//Сохраняем координаты начальной точки
	var startCords = {
		x: evt.clientX,
		y: evt.clientY
	};

	var dragged = false;

	//поведение при движении мыши
	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();
		dragged = true;
		//рассчет сдвига
		var shift = {
			x: startCords.x - moveEvt.clientX,
			y: startCords.y - moveEvt.clientY
		};
		//перезаписываем начальные координаты
		startCords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};
		//отрисовываем новое положение
		setup.style.top = (setup.offsetTop - shift.y) + 'px';
		setup.style.left = (setup.offsetLeft - shift.x) + 'px';
	};

	var onMouseUp = function(upEvt) {
		upEvt.preventDefault();
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);

		if (dragged) {
			var onClickPreventDefault = function(evt) {
				evt.preventDefault();
				dialogHander.removeEventListener('click', onClickPreventDefault);
			};
			dialogHander.addEventListener('click', onClickPreventDefault);
		}
	//	dragged = false;
	};

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

})();
