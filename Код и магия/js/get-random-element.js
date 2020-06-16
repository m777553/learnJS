'use strict';



// Изменение цвета мантии персонажа по нажатию. Цвет мантии .setupwizard .wizard-coat должен обновляться по нажатию на неё. Цвет мантии
// задаётся через изменение инлайнового CSS-свойства fill для элемента.
// Цвет должен сменяться произвольным образом на один из следующих
// цветов:
// o rgb(101, 137, 164)
// o rgb(241, 43, 107)
// o rgb(146, 100, 161)
// o rgb(56, 159, 117)
// o rgb(215, 210, 55)
// o rgb(0, 0, 0)
// Изменение цвета фаерболов по нажатию. Цвет задаётся через
// изменение фона у блока .setup-fireball-wrap. Возможные варианты цвета:
// o #ee4830
// o #30a8ee
// o #5ce6c0
// o #e848d5
// o #e6e848
(function() {


	var wizardCoat = document.querySelector('.wizard-coat');

	var wizardCoatInput = document.querySelector('input[name="coat-color"]');

	var wizardFireball = document.querySelector('.setup-fireball-wrap');

	var wizardFireballInput = document.querySelector('input[name="fireball-color"]');



	var coatColor = ['rgb(101, 137, 164)', ' rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', ' rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

	var fireballColor = [
		'#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'
	];

	//функция выбора рандомного элемента из массива
	window.getRandomElement = function(massive) {
		return massive[Math.floor(Math.random() * massive.length)];
	};

	//функция смены цвета элемента с учетом изменения значения input для правильной отправки данных формы
	var changeClothes = function(clothesElem, massive) {
		var color = window.getRandomElement(massive);
		clothesElem.style.fill = color;
		var changedInput;
		if (clothesElem == wizardCoat) {
			changedInput = wizardCoatInput;
			changedInput.value = color;
		}
	};

	var changeFireball = function() {
		var color = window.getRandomElement(fireballColor);
		wizardFireballInput.value = color;
		wizardFireball.style.background = color;
		//alert(wizardFireball.value);
	};
	//changeFireball();


	//вызов слушателя клика на элемент одежды
	wizardCoat.addEventListener('click', function(evt) {
		changeClothes(wizardCoat, coatColor);

	});

	wizardFireball.addEventListener('click', changeFireball);


})();
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
