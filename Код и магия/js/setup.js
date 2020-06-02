'use strict';

var setup = document.querySelector('.setup');
//setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

//Создаём  массивы, из которых будем собирать

var firstNameAll = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var secondNameAll = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColorAll = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColorAll = ['black', 'lime', 'blue', 'DeepSkyBlue	', 'green', 'Gray'];

//Наш шаблон волшебников , вернее то, что отвечает за волшебника (после template)
var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Сюда в разметке должны вставать похожие волшебники
var similarWizardList = document.querySelector('.setup-similar-list');

// var fullName1 = [];
// for (var i = 0; i < 4; i++) {
// 	var r1 = Math.floor(Math.random() * (firstName.length - i)) + i;
// 	var r2 = Math.floor(Math.random() * (secondName.length - i)) + i;
// 	var name1 = firstName[r1];
// 	firstName[r1] = firstName[i];
// 	firstName[i] = name1;
// 	var name2 = secondName[r2];
// 	secondName[r2] = secondName[i];
// 	secondName[i] = name2;
// 	fullName1.push(name1 + " " + name2);
// }
//alert(fullName);


var createRandomMassive = function(fullMassive, lengthCreateveMassive) {
	var coatColor = [];
	for (var f = 0; f < lengthCreateveMassive; f++) {
		var f1 = Math.floor(Math.random() * (fullMassive.length - f)) + f;

		var color = fullMassive[f1];
		fullMassive[f1] = fullMassive[f];
		fullMassive[f] = color;

		coatColor.push(color);
	}
	return coatColor;
}


var coatColor = createRandomMassive(coatColorAll, 4);
var eyesColor = createRandomMassive(eyesColorAll, 4);
//alert(coatColor.length);

//этот цикл БЕЗ ПОВТОРЕНИЙ
// for (var i = 0; i < 4; i++) {
// 	var r1 = Math.floor(Math.random() * (coatColorAll.length - i)) + i;
//
// 	var color = coatColorAll[r1];
// 	coatColorAll[r1] = coatColorAll[i];
// 	coatColorAll[i] = color;
//
// 	coatColor.push(color);
// }




//мокаем )) mock так должен выглядеть массив
// var mockSimilarWizardsList = [{
// 		name: fullName[1],
// 		coatColor: 'rgb(0, 0, 0)',
// 		eyesColor: 'red'
// 	},
// 	{
// 		name: "fullName[2],
// 		coatColor: 'rgb(0, 0, 0)',
// 		eyesColor: 'red'
// 	},
// 	{
// 		name: fullName[3],
// 		coatColor: 'rgb(0, 0, 0)',
// 		eyesColor: 'red'
// 	},
// 	{
// 		name: fullName[4],
// 		coatColor: 'rgb(0, 255, 0)',
// 		eyesColor: 'blue'
// 	}
// ];



//функция создания объекта волшебника. name,
// coatColor,
// eyesColor
// тоже самое что и name:name,
// coatColor: coatColor,
// eyesColor: eyesColor
var makeWizard = function(name, coatColor, eyesColor) {
	return {
		name,
		coatColor,
		eyesColor
	};
}
//мокаем )) Создаем массив волшебников
var mockSimilarWizardsList = [];
var firstName = createRandomMassive(firstNameAll, 4);
var secondName = createRandomMassive(secondNameAll, 4);
var coatColor = createRandomMassive(coatColorAll, 4);
var eyesColor = createRandomMassive(eyesColorAll, 4);
for (var ind = 0; ind < 4; ind++) {
	var wizzy = makeWizard(firstName[ind] + ' ' + secondName[ind], coatColor[ind], eyesColor[ind]);
	mockSimilarWizardsList.push(wizzy);
}

// alert(mockSimilarWizardsList[0].coatColor);


for (var j = 0; j < 4; j++) {
	var wizardElement = templateWizard.cloneNode(true);
	wizardElement.querySelector('.setup-similar-label').textContent = mockSimilarWizardsList[j].name;

	wizardElement.querySelector('.wizard-coat').style.fill = mockSimilarWizardsList[j].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = mockSimilarWizardsList[j].eyesColor;

	similarWizardList.appendChild(wizardElement);
}

// Урок 4. Работа с событиями.
// Открытие/закрытие окна настройки персонажа:

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var setutOpenButton = document.querySelector('.setup-open');
var setutCloseButton = document.querySelector('.setup-close');




//Сохраняем начальное положение окна настройки
var setupStartCords = {
	x: window.getComputedStyle(setup).left.replace(/[^\d.]/g,''),
	y: window.getComputedStyle(setup).top.replace(/\D/g,'')
};
//выносим повторяющиеся блоки (закр и откр окна) в отдельные функции
var openPopup = function() {
	setup.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);


//Задаём начальное положение окну настройки

	setup.style.top =setupStartCords.y + 'px';
	setup.style.left = setupStartCords.x + '%';
};
var closePopup = function() {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
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
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});



setutCloseButton.addEventListener('click', function(evt) {
	closePopup();
});
//обработка закрытия настройки клавишей ENTER
setutCloseButton.addEventListener('keydown',
	function(evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			closePopup();
		}
	});


// Валидация ввода имени персонажа. Имя персонажа вводится в
// поле .setup-user-name. Добавьте следующие ограничения:
// o имя персонажа не может содержать менее 2 символов;
// o максимальная длина имени персонажа — 25 символов.
// Для указания ограничений на ввод используйте стандартные возможности
// форм HTML5.



// Обрабатываем событие invalid на поле ввода имени персонажа

var userNameInput = document.querySelector('.setup-user-name');

//Останавливаем распространение события закрытия на ESC пока мы на поле ввода имени
userNameInput.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		evt.stopPropagation();
	}
});
userNameInput.addEventListener('invalid', function(evt) {
	if (userNameInput.validity.tooShort) {
		userNameInput.setCustomValidity('Поле должно содержать минимум два символа');
	} else if (userNameInput.validity.tooLong) {
		userNameInput.setCustomValidity('Поле должно содержать не более 25 символов');
	} else if (userNameInput.validity.valueMissing) {
		userNameInput.setCustomValidity('Поле должно быть заполнено, позязя');
	} else {
		userNameInput.setCustomValidity('');
	}

});


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

var wizardCoat = document.querySelector('.wizard-coat');

var wizardCoatInput = document.querySelector('input[name="coat-color"]');

var wizardFireball = document.querySelector('.setup-fireball-wrap');

var wizardFireballInput = document.querySelector('input[name="fireball-color"]');



var coatColor = ['rgb(101, 137, 164)', ' rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', ' rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var fireballColor = [
	'#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'
];

//функция выбора рандомного элемента из массива
var getRandomElement = function(massive) {
	return massive[Math.floor(Math.random() * massive.length)];
};

//функция смены цвета элемента с учетом изменения значения input для правильной отправки данных формы
var changeClothes = function(clothesElem, massive) {
	var color = getRandomElement(massive);
	clothesElem.style.fill = color;
	var changedInput;
	if (clothesElem == wizardCoat) {
		changedInput = wizardCoatInput;
		changedInput.value = color;
	}
};

var changeFireball = function() {
	var color = getRandomElement(fireballColor);
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
