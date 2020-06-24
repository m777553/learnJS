'use strict';
(function() {


	window.integerMinMax = function(min, max) {
		return Math.round(Math.random() * (max - min) + min)
	};

	// Покажите элемент .big-picture, удалив у него класс .hidden и заполните
	// его данными из первого элемента сгенерированного вами массива:
	// o Адрес изображения url подставьте как src изображения внутри
	// блока.big-picture__img.
	// o Количество лайков likes подставьте как текстовое содержание
	// элемента .likes-count.
	// o Количество комментариев comments подставьте как текстовое
	// содержание элемента .comments-count.
	// o Список комментариев под фотографией: коментарии должны
	// вставляться в блок .social__comments. Разметка каждого
	// комментария должна выглядеть так:
	// <li class="social__comment social__comment--text">
	//  <img class="social__picture" src="img/avatar-
	//  {{случайное число от 1 до 6}}.svg"
	//  alt="Аватар комментатора фотографии"
	//  width="35" height="35">
	//  <p class="social__text">{{текст комментария}}</p>
	// </li>
	// o Описание фотографии description вставьте строкой
	// в блок .social__caption.

	var bigPicture = document.querySelector('.big-picture');

	var showBigPicture = function() {
		bigPicture.classList.remove('hidden');
	}


	//Создаю функцию комментариев к бигПикчер
	var createBigPicture = function(bigPicture) {

		bigPicture.querySelector('.big-picture__img').querySelector('img').src = photoMassive[0].url;

		bigPicture.querySelector('.likes-count').textContent = photoMassive[0].likes;

		bigPicture.querySelector('.comments-count').textContent = photoMassive[0].comments.length;

		//Список, куда будем вставлять комментарии
		var socialComentsList = bigPicture.querySelector('.social__comments');
		//это будет мой шаблон
		var socialComentsElement = bigPicture.querySelector('.social__comment');

		//fragment это ссылка на пустой объект DocumentFragment.
		var fragment = document.createDocumentFragment();

		//создание одного элемента с помощью шаблона
		var createCommentsElement = function(photoMassiveElem, comment) {
			var commentsElement = socialComentsElement.cloneNode(true);

			commentsElement.querySelector('img').src = `img/avatar-${window.integerMinMax(1,6)}.svg`;
			commentsElement.querySelector('.social__text').textContent = comment;
			// if (photoMassiveElem.comments[1]) {
			// 	var comment= photoMassiveElem.comments[0];
			// 	photoMassiveElem.comments[0]=photoMassiveElem.comments[1];
			// 	photoMassiveElem.comments[1] = comment;
			// }


			return commentsElement;
		}

		//добавляем во fragment моканые фотографии
		for (var j = 0; j < photoMassive[0].comments.length; j++) {
			fragment.appendChild(createCommentsElement(photoMassive[0], photoMassive[0].comments[j]));
		}

		socialComentsList.appendChild(fragment);


		bigPicture.querySelector('.social__caption').textContent = photoMassive[0].description;

		bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
		bigPicture.querySelector('.social__comments-loader').classList.add('visually-hidden');
	};

	createBigPicture(bigPicture);

	//закрытие окна bigPicture
	var closeBtnPicture = document.querySelector('.big-picture__cancel');
	var closeBigPicture = function(evt) {
		var bigPicture = document.querySelector('.big-picture');
		bigPicture.classList.add('hidden');
	};
	closeBtnPicture.addEventListener('click', closeBigPicture);

	var pictures = document.querySelector('.pictures');
	var onTargetClick = function(evt) {

		if (evt.target.className == 'picture__img') {
			window.backend.load(function(pictures) {
					//console.log('ok');
					var indexPicture = Number(evt.target.src.replace(/\D+/g, ""))
					-1;
					var bigPicture = document.querySelector('.big-picture');
					bigPicture.classList.remove('hidden');
					bigPicture.querySelector('img').src = pictures[indexPicture].url;
					//photoMassive[0]- это должно быть заменено на описание из фото
					bigPicture.querySelector('.social__caption').textContent = pictures[indexPicture].description;
					bigPicture.querySelector('.likes-count').textContent = pictures[indexPicture].likes;


					//target.closest('a') выбирает ближайшего предка с заданным селектором
					bigPicture.querySelector('.social__text').textContent = evt.target.closest('a').querySelector('.picture__comments').textContent;

					bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
					bigPicture.querySelector('.social__comments-loader').classList.add('visually-hidden');






				},
				function(str) {
					window.backend.createErrorPopup(str);
				});
			//alert(evt.target.className);

		}
		// else {
		// 	alert('not img');
		// }

	};

	pictures.addEventListener('click', onTargetClick);



})();
