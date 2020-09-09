'use strict';
(function() {


	//создание рандомного массива из имеющегося, без повторений
	var createRandomMassive = function(fullMassive, lengthCreateveMassive) {
		var randomMassive = [];
		for (var f = 0; f < lengthCreateveMassive; f++) {
			var f1 = Math.floor(Math.random() * (fullMassive.length - f)) + f;

			var elem = fullMassive[f1];
			fullMassive[f1] = fullMassive[f];
			fullMassive[f] = elem;

			randomMassive.push(elem);
		}
		return randomMassive;
	}

	//массив с повторениями из одного элемента
	var createMassiveOne = function(fullMassive, lengthCreateveMassive) {
		var randomMassive = [];
		for (var f = 0; f < lengthCreateveMassive; f++) {
			var elem1 = fullMassive[Math.floor(Math.random() * fullMassive.length)];
			randomMassive.push(elem1);
		}
		return randomMassive;
	}
	//массив с повторениями из одного или двух элементов
	var createMassive = function(fullMassive, lengthCreateveMassive) {
		var randomMassive = [];
		for (var f = 0; f < lengthCreateveMassive; f++) {
			var randomMassiveElem = [];
			randomMassiveElem[0] = fullMassive[Math.floor(Math.random() * fullMassive.length)];
			if (Math.round(Math.random())) {
				randomMassiveElem[1] = fullMassive[Math.floor(Math.random() * fullMassive.length)];
			}
			randomMassive.push(randomMassiveElem);
		}
		return randomMassive;
	}


	//массив адрес картинки
	var url = [];
	for (var i1 = 0; i1 < 25; i1++) {
		url[i1] = `photos/${i1+1}.jpg`;
		//url.push(url[i1]);
	}

	//массив лайков в диапазоне от 15 до 200
	var likes = [];
	for (var i2 = 0; i2 < 25; i2++) {
		likes[i2] = Math.floor(Math.random() * (200 - 15) + 15);
	}

	var commentsAll = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец	из кадра.В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках	и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат	на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ? !'];
	var comments = createMassive(commentsAll, 25);
	//alert(comments.length);

	var descriptionAll = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами	и отгоняйте все сомненья.Не обижайте всех словами......', 'Вот это тачка!'];

	var description = createMassiveOne(descriptionAll, 25);

	//Функция создания элемента массива описания фото, состоящего из объектов
	var makePhoto = function(url, likes, comments, description) {
		return {
			url,
			likes,
			comments,
			description
		};
	}

	window.photoMassive = [];
	for (var i3 = 0; i3 < 25; i3++) {
		window.photoMassive[i3] = makePhoto(url[i3], likes[i3], comments[i3], description[i3]);
	}

	//alert(photoMassive[24].comments);


	// На основе данных, созданных в предыдущем пункте
	// и шаблона #picture создайте DOM-элементы, соответствующие
	// фотографиям и заполните их данными из массива:
	// o Адрес изображения url подставьте как src изображения.
	// o Количество лайков likes подставьте как текстовое содержание
	// элемента .picture__stat--likes.
	// o Количество комментариев comments подставьте как текстовое
	// содержание элемента .picture__stat--comments.





	// var pictureTemlate = document.querySelector('#picture').content.querySelector('.picture');
	// //pictureTemlate.classList.remove('hidden');
	//
	// var picturesList = document.querySelector('.pictures');
	//
	// //fragment это ссылка на пустой объект DocumentFragment.
	// var fragment = document.createDocumentFragment();
	//
	// //создание одного элемента с помощью шаблона
	// var createPictureElement = function(photoMassiveElem) {
	// 	var pictureElement = pictureTemlate.cloneNode(true);
	//
	// 	pictureElement.querySelector('img').src = photoMassiveElem.url;
	// 	pictureElement.querySelector('.picture__likes').textContent = photoMassiveElem.likes;
	// 	pictureElement.querySelector('.picture__comments').textContent = photoMassiveElem.comments[0].message;
	//
	// 	return pictureElement;
	// };

	window.loadedPicturs = [];
	// var makePicturesMasive = function(picturs) {
	// 	window.loadedPicturs = picturs;
	//
	// 	return window.loadedPicturs;
	// };


	//добавляем во fragment моканые фотографии
	// for (var j = 0; j < 25; j++) {
	// 	fragment.appendChild(createPictureElement(window.photoMassive[j]));
	//
	// }
	// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки
	// элементов используйте DocumentFragment.
	//добавляем фрагмент со всеми фотографиями на страницу



	// var onLoad = function(pictures) {
	// 	//console.log('ok');
	// 	//makePicturesMasive(pictures);
	// 	window.loadedPicturs = pictures;
	// 	var fragment = document.createDocumentFragment();
	// 	for (var i = 0; i < 25; i++) {
	// 		fragment.appendChild(createPictureElement(pictures[i]));
	// 		picturesList.appendChild(fragment);
	//
	// 	}
	//
	//
	// 	console.log(window.loadedPicturs);
	// 	//После завершения загрузки изображений с сервера покажите блок .img-filters,
	// 	//убрав у него класс .img-filters--inactive
	// 	document.querySelector('.img-filters').classList.remove('img-filters--inactive');
	//
	//
	//
	// };


	window.backend.load(window.onLoad, function(str) {
		window.backend.createErrorPopup(str);
	});
	// window.pictures = window.makePicturesMasive();
	// console.log(window.pictures);

	// for (var j = 0; j < 25; j++) {
	// 	var pictureElement = pictureTemlate.cloneNode(true);
	//
	// 	pictureElement.querySelector('img').src = photoMassive[j].url;
	//
	// 	pictureElement.querySelector('.picture__stat--likes').textContent = photoMassive[j].likes;
	// 	pictureElement.querySelector('.picture__stat--comments').textContent = photoMassive[j].comments;
	//
	//
	// 	picturesList.appendChild(pictureElement);
	// }

})();
