'use strict';


// Создайте массив, состоящий из 8 сгенерированных JS объектов, которые
// будут описывать похожие объявления неподалёку. Структура объектов
// должна быть следующей:

// var oneObject = {
// 	author: {
// 		avatar: avatar
// 	},
// 	offer: {
// 		title: title,
// 		address: address,
// 		price: price,
// 		type: type,
// 		rooms: rooms,
// 		guests: guests,
// 		checkin: checkin,
// 		checkout: checkout,
// 		fetures: fetures,
// 		description: description,
// 		photos: photos
// 	},
// 	location: {
// 		x: x,
// 		y: y
// 	}
// };
var integerNimMax = function(min, max) {
	return Math.round(Math.random() * (max - min) + min)

};
//alert(integerNimMax(8, 18));

var createNumberMassiveString = function(min, max) {
	var massive = [];
	//var stringName = `img/avatars/user0${i1}.png`;
	for (var i1 = min; i1 <= max; i1++) {
		var stringName = `img/avatars/user0${'0'+i1}.png`;
		var name = stringName;
		massive.push(name);
	}
	return massive;
};
var createNumberMassive = function(min, max, leight, round) {
	var massive = [];
	//var stringName = `img/avatars/user0${i1}.png`;
	for (var i2 = 0; i2 <= leight; i2++) {
		massive[i2] = integerNimMax(min, max);
		if (round) {
			massive[i2] = Math.floor(massive[i2] / round) * round;
		}
	}
	return massive;
};




var avatarAll = createNumberMassiveString(1, 8);
//alert(avatarAll);
var titleAll = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];

var priceAll = createNumberMassive(1000, 100000, 8, 100);
//alert(priceAll);
var typeDescription = ['palace', 'flat', 'house', 'bungalo'];
var priceAll = createNumberMassive(1, 5, 8);
//alert(priceAll);
var guestsAll = createNumberMassive(1, 14, 8);
var checkinOutDescription = ['12:00', '13:00', '14:00'];



// .У блока .map уберите класс .map--faded.
// Это временное решение, этот класс переключает карту из неактивного
// состояния в активное. В последующих заданиях, в соответствии с ТЗ
// вы будете переключать режимы страницы: неактивный, в котором карта
// и форма заблокированы и активный режим, в котором производится ввод
// данных и просмотр похожих объявлений. Сейчас, для тестирования
// функции генерации похожих объявлений мы временно сымитируем
// активный режим, а в последующих разделах запрограммируем его
// полностью.

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var templateMapCard = document.querySelector('template').content.querySelector('.map__card');


// На основе данных, созданных в первом пункте, создайте DOM-элементы,
// соответствующие меткам на карте, и заполните их данными из массива.
// Итоговую разметку метки .map__pin можно взять из шаблона .map__card.
// o У метки должны быть следующие данные:
// o Координаты:style="left: {{location.x}}px; top: {{location.y}}px;"
// o src="{{author.avatar}}"
// o alt="{{заголовок объявления}}"
// Обратите внимание
// Координаты X и Y, которые вы вставите в разметку, это не координаты
// левого верхнего угла блока метки, а координаты, на которые указывает
// метка своим острым концом. Чтобы найти эту координату нужно учесть
// размеры элемента с меткой.
