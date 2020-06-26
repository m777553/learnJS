'use strict';
(function() {


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





	//ТУТ СПРЯТАНЫ ПРОРИСОВЫВАНИИЯ МОКАВЫХ ДАННЫХ В СВЯЗИ С НАЧАЛОМ РАБОТЫ С СЕРВЕРОМ

	// for (var j = 0; j < 4; j++) {
	// 	var wizardElement = templateWizard.cloneNode(true);
	// 	wizardElement.querySelector('.setup-similar-label').textContent = mockSimilarWizardsList[j].name;
	//
	// 	wizardElement.querySelector('.wizard-coat').style.fill = mockSimilarWizardsList[j].coatColor;
	// 	wizardElement.querySelector('.wizard-eyes').style.fill = mockSimilarWizardsList[j].eyesColor;
	//
	// 	similarWizardList.appendChild(wizardElement);
	// }




	//создаём функцию для отрисовки новых похожих магов
	window.renderSimilarWizards = function() {


		var fragment = document.createDocumentFragment();
		loadedWizards.sort(function(left, right) {
			return getRank(right) - getRank(left);
		});
		//console.log(loadedWizards);
		for (var i = 0; i < 4; i++) {
			fragment.appendChild(window.renderWizard(loadedWizards[i]));
			similarWizardList.appendChild(fragment);
		}
	};
	//Используем функцию loader
	var loadedWizards = [];
	var getRank = function(wizard) {
		var color = window.changes.newColor;

		var rank = 0;
		if (wizard.colorCoat === color) {
			rank += 2;
		}
		if (wizard.colorEyes === 'black') {
			rank += 1;
		}
		return rank;
	};
	var errorFunc = function(str) {
		window.backend.createErrorPopup(str);
	};
	var successFunc = function(wizards) {
		loadedWizards = wizards;
		//	console.log(loadedWizards);

		//Отрисовка первых четырёх магов из загрузки
		// var fragment = document.createDocumentFragment();
		// for (var i = 0; i < 4; i++) {
		// 	fragment.appendChild(window.renderWizard(wizards[i]));
		// 	similarWizardList.appendChild(fragment);
		// 	document.querySelector('.setup-similar').classList.remove('hidden');
		// }
		window.renderSimilarWizards();

		//console.log(loadedWizards+'2');
	};

	window.backend.load(
		successFunc, //вынесла в отдельные модули функции работы с полученными данными. Тут они вызываются без параметров.

		// function(wizards) {
		// 	//console.log('ok');
		// 	loadedWizards = wizards;
		// 	console.log(loadedWizards);
		// 	var fragment = document.createDocumentFragment();
		// 	for (var i = 0; i < 4; i++) {
		// 		fragment.appendChild(window.renderWizard(wizards[i]));
		// 		similarWizardList.appendChild(fragment);
		// 		document.querySelector('.setup-similar').classList.remove('hidden');
		// 	}
		// },
		errorFunc
		// function(str) {
		// 	window.backend.createErrorPopup(str);
		// }
	);
	// setTimeout(function() {
	// 	console.log(loadedWizards);
	// }, 1000);

	var updateWizards = function() {

	};

})();
