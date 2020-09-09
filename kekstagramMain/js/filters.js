'use strict';
(function() {
	//
	// Добавьте обработчики изменения фильтров, которые будут управлять порядком
	// отрисовки элементов на странице:
	// o Популярные — фотографии в изначальном порядке.
	// o Новые — 10 случайных, не повторяющихся фотографий.
	// o Обсуждаемые — фотографии, отсортированные в порядке убывания
	// количества комментариев.



	//Дублирую код   --> Выбор фильтра при нажатии на мини изображение
	//
	// var effectsList = document.querySelector('.effects__list');
	// var imgPreview = document.querySelector('.img-upload__preview');
	//
	// var onEffectClick = function(evt) {
	// 	var effectTanger = evt.target;
	//
	// 	if (effectTanger.matches('.effects__preview')) {
	// 		if (imgPreview.classList.length == 2) {
	// 			imgPreview.classList.remove(imgPreview.classList[1]);
	//
	//
	// 		}
	//
	// 		//NEW
	// 		//При переходе между эффектами сброс на 20%
	// 		pinHendler.style.left = 20 + '%';
	// 		effectLevel.style.width = 20 + '%';
	//
	//
	// 		imgPreview.classList.add(effectTanger.classList[1]);
	// 		//обнуление стиля фильтра при переключении между эффектами
	// 		imgPreview.style.filter = '';
	// 		//Скрываем ползунок на оригинальном фото
	// 		if (effectTanger.classList.contains('effects__preview--none')) {
	// 			document.querySelector('.effect-level').classList.add('hidden');
	// 		} else {
	// 			document.querySelector('.effect-level').classList.remove('hidden');
	// 		}
	//
	// 		evt.stopPropagation();
	// 	}
	//
	//
	// };
	// effectsList.addEventListener('click', onEffectClick);





	var filters = {
		default: document.querySelector('#filter-default'),
		random: document.querySelector('#filter-random'),
		discussed: document.querySelector('#filter-discussed'),
	};
	//функции обработки выбранного фильтра
	var isDefaultRange = function(pictures) {
		window.clearGallery();
		window.updatePictures(window.loadedPicturs);
	};

	var isRandomRange = function(pictures) {

		var randomArr = window.loadedPicturs.slice();

		window.changeToRandomMassive(randomArr);
		window.debounce(function() {
			//console.log('debounce');
			window.clearGallery();
			window.updatePictures(randomArr);
		});

	};

	var isDiscussedRange = function(pictures) {
		window.clearGallery();
		var discussedArr = window.loadedPicturs.slice();
		//discussedArr.slice(0, 9);
		discussedArr.sort(function(a, b) {
			return b.comments.length - a.comments.length;
		}).splice(10);
		window.updatePictures(discussedArr);
		//console.log(discussedArr);
		//console.log(randomArr[0].comments.length);

	};



	//Внешний вид кнопок
	var filtersForm = document.querySelector('.img-filters__form');
	var filtersBtn = document.querySelectorAll('.img-filters__button');

	var onFilterClick = function(evt) {
		var filterTarget = evt.target;
		if (filterTarget.matches('.img-filters__button')) {
			//удаляем активный класс
			for (var i = 0; i < 3; i++) {
				filtersBtn[i].classList.remove('img-filters__button--active');
			}

			//ставим активный класс на цель
			filterTarget.classList.add('img-filters__button--active');
		}

	};

	filtersForm.addEventListener('click', onFilterClick);
	// setTimeout(function() {
	// 	console.log(window.loadedPicturs);
	// }, 300);

	//клик на по умолчанию фото
	filters.default.addEventListener('click', isDefaultRange);


	//клик на случайные фото
	filters.random.addEventListener('click', isRandomRange);

	//клик на обсуждаемые фото
	filters.discussed.addEventListener('click', isDiscussedRange);






})();
