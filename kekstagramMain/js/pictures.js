'use strict';

var integerNimMax = function(min, max) {
	return Math.round(Math.random() * (max - min) + min)
};

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

//массив с повторениями из одного или двух элементов
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

var photoMassive = [];
for (var i3 = 0; i3 < 25; i3++) {
	photoMassive[i3] = makePhoto(url[i3], likes[i3], comments[i3], description[i3]);
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

var pictureTemlate = document.querySelector('#picture').content.querySelector('.picture');
//pictureTemlate.classList.remove('hidden');

var picturesList = document.querySelector('.pictures');

//fragment это ссылка на пустой объект DocumentFragment.
var fragment = document.createDocumentFragment();

//создание одного элемента с помощью шаблона
var createPictureElement = function(photoMassiveElem) {
	var pictureElement = pictureTemlate.cloneNode(true);

	pictureElement.querySelector('img').src = photoMassiveElem.url;
	pictureElement.querySelector('.picture__likes').textContent = photoMassiveElem.likes;
	pictureElement.querySelector('.picture__comments').textContent = photoMassiveElem.comments;

	return pictureElement;
}
//добавляем во fragment моканые фотографии
for (var j = 0; j < 25; j++) {
	fragment.appendChild(createPictureElement(photoMassive[j]));

}
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки
// элементов используйте DocumentFragment.
//добавляем фрагмент со всеми фотографиями на страницу
picturesList.appendChild(fragment);

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

		commentsElement.querySelector('img').src = `img/avatar-${integerNimMax(1,6)}.svg`;
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




//
// 1. Загрузка нового изображения на сайт и заполнение
// информации о нём:
// 1.1. Загрузка нового изображения:
// выбор файла с изображением для загрузки;
// изменение масштаба изображения;
// применение одного из заранее заготовленных эффектов;
// выбор глубины эффекта с помощью ползунка;
// добавление текстового комментария;
// добавление хэш-тегов.
// Обратите внимание
// В последующих после выбора файла шагах может использоваться тестовое
// изображение, вставленное в разметку по умолчанию. Подстановка в форму реального
// изображения, выбранного пользователем необязательна.
// 1.3. Выбор изображения для загрузки осуществляется с помощью стандартного контрола
// загрузки файла #upload-file , который стилизован под букву «О» в логотипе. После
// выбора изображения (изменения значения поля #upload-file ), показывается форма
// редактирования изображения.
// 1.4. Закрытие формы редактирования изображения производится либо нажатием
// на кнопку .upload-cancel , либо нажатием клавиши Esc.
var ESC_KEYCODE = 27;
//форма редактирования загруженного изображения
var editingForm = document.querySelector('.img-upload__overlay');


//элемент, который иницирует загрузку
var imgUpload = document.querySelector('.img-upload__label');

//поле загрузки фото input[type='file']
var imgInput = document.querySelector('#upload-file');

//изображение предварительного просмотра
var imgPreview = document.querySelector('.img-upload__preview');

var closeBtn = document.querySelector('.img-upload__cancel');


// открытие окна редактирования
var openUploadForm = function() {
	editingForm.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
	//ставлю выбранное изображение в окно редактирования
	editingForm.querySelector('img').src = `img/${imgInput.files[0].name}`;
	// editingForm.querySelector('img').src = `${imgInput.value}`;
	//реализация мини изображений
	var effectsList = document.querySelector('.effects__list');
	var effectsItems = effectsList.querySelectorAll('span');
	for (var i = 0; i < effectsItems.length; i++) {
		effectsItems[i].style.backgroundImage = `url('img/${imgInput.files[0].name}')`;
	}
};
//закрытие окна редактирования

var closeUploadForm = function() {
	editingForm.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};
var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closeUploadForm();
	}
};




var downloadPhoto = function() {
	alert('downloadPhoto work');
	//return adress = imgInput.files[0];
};

imgUpload.addEventListener('click', function(evt) {
	imgUpload.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			openUploadForm();
		}
	});
	imgInput.addEventListener('change', function(evt) {

		//alert(imgInput.files[0].name);
		openUploadForm();
	});

	//imgInput.removeEventListener('change', downloadPhoto);
});

closeBtn.addEventListener('click', closeUploadForm);

//закрытие окна bigPicture
var closeBtnPicture = document.querySelector('.big-picture__cancel');
var closeBigPicture = function(evt) {
	var bigPicture = document.querySelector('.big-picture');
	bigPicture.classList.add('hidden');
};
closeBtnPicture.addEventListener('click', closeBigPicture);


// Нажатие на фотографию приводит к показу фотографии в полноэкранном режиме.
// Получается, что для фотографий должны быть созданы обработчики событий,
// которые вызывают показ оверлея с соответствующими данными.


//функция выбора рандомного элемента из массива
var getRandomElement = function(massive) {
	return massive[Math.floor(Math.random() * massive.length)];
};

var pictures = document.querySelector('.pictures');
var onTargetClick = function(evt) {
	if (evt.target.className == 'picture__img') {
		//alert(evt.target.className);
		var bigPicture = document.querySelector('.big-picture');
		bigPicture.classList.remove('hidden');
		bigPicture.querySelector('img').src = evt.target.src;
		//photoMassive[0]- это должно быть заменено на описание из фото
		bigPicture.querySelector('.social__caption').textContent = getRandomElement(photoMassive).description;
		//alert(evt.target.closest('a'));
		bigPicture.querySelector('.social__text').textContent = evt.target.closest('a').querySelector('.picture__comments').textContent;

		bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
		bigPicture.querySelector('.social__comments-loader').classList.add('visually-hidden');
	}
	// else {
	// 	alert('not img');
	// }

}


pictures.addEventListener('click', onTargetClick);

// Добавим на пин слайдера .scale__pin обработчик события mouseup, который будет
// согласно ТЗ изменять уровень насыщенности фильтра для изображения. Для
// определения уровня насыщенности, нужно рассчитать положение пина слайдера
// относительно всего блока и воспользоваться пропорцией, чтобы понять, какой
// уровень эффекта нужно применить.
// Обратите внимание, что при переключении фильтра, уровень эффекта должен
// сразу cбрасываться до начального состояния, т.е. логика по определению уровня
// насыщенности должна срабатывать не только при «перемещении» слайдера,
// но и при переключении фильтров.

var effectLevelPin = document.querySelector('.effect-level__pin');

var onMouseDown = function(evt) {
	evt.preventDefault();
	var startCords = {
		x: evt.clientX,
		y: evt.clientY
	};
}
//effectLevelPin.addEventListener('mousedown', onMouseDown(evt));


var onMouseUp = function(evt) {
	var endCords = {
		x: evt.clientX,
		y: evt.clientY
	};

}
//effectLevelPin.addEventListener('mouseup', onMouseUp(evt));

// Если же стиль задан в CSS, то element.style.backgroundColor ничего не вернёт.
// Чтобы всё заработало, нужно запросить просчитанные стили:
//
// element = document.getElementById('foo');
// color = window.getComputedStyle(element).backgroundColor;



//Выбор фильтра при нажатии на мини изображение

var effectsList = document.querySelector('.effects__list');
var imgPreview = document.querySelector('.img-upload__preview');

var onEffectClick = function(evt) {
	var effectTanger = evt.target;

	if (effectTanger.matches('.effects__preview')) {
		if (imgPreview.classList.length == 2) {
			imgPreview.classList.remove(imgPreview.classList[1])
		}
		imgPreview.classList.add(effectTanger.classList[1]);
		//document.getComputedStyle(imgPreview).backgroundColor = 'black';
		evt.stopPropagation();
	}
	// alert(evt.target);
	// evt.stopPropagation();

};
effectsList.addEventListener('click', onEffectClick);









//editingForm.classList.remove('hidden');
