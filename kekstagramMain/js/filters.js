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

	};
	var isRandomRange = function(pictures) {

	};
	var isDiscussedRange = function(pictures) {
		console.log('discussed');
		var discussedArr = window.loadedPicturs.slice(0, 10);
		//discussedArr.slice(0, 9);
		discussedArr.sort(function(a, b) {
			return b.likes - a.likes;
		});
		console.log(discussedArr);
		console.log(window.loadedPicturs);
	};




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
	setTimeout(function() {
		console.log(window.loadedPicturs);
	}, 300);

	filters.discussed.addEventListener('click', isDiscussedRange);






})();
