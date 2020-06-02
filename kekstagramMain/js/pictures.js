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
	document.querySelector('.effect-level').classList.add('hidden');
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
	if (evt.keyCode === ESC_KEYCODE
		//&& evt.target !== input
	) {

		closeUploadForm();
	}
};




// var downloadPhoto = function() {
// 	alert('downloadPhoto work');
// 	//return adress = imgInput.files[0];
// };

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
		//target.closest('a') выбирает ближайшего предка с заданным селектором
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
		//Скрываем ползунок на оригинальном фото
		if (effectTanger.classList.contains('effects__preview--none')) {
			document.querySelector('.effect-level').classList.add('hidden');
		} else {
			document.querySelector('.effect-level').classList.remove('hidden');
		}
		//document.getComputedStyle(imgPreview).backgroundColor = 'black';
		evt.stopPropagation();
	}
	// alert(evt.target);
	// evt.stopPropagation();

};
effectsList.addEventListener('click', onEffectClick);


// 2.3. Хэш-теги:
// хэш-теги необязательны;
// хэш-тег начинается с символа # (решётка);
// хеш-тег не может состоять только из одной решётки;
// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;
// максимальная длина одного хэш-тега 20 символов, включая решётку.;
// теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом.
// если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить
// к закрытию формы редактирования изображения.
// Сообщения о неправильном формате хэштега задаются с помощью
// метода setCustomValidity у соответствующего поля.


// 2.4. Комментарий:
// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;
// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить
// к закрытию формы редактирования изображения.



// Нетривиальный сценарий валидации в Кекстаграме — это хэш-теги. Для проверки
// валидности хэш-тегов, нужно вспомнить работу с массивами. Набор хэш-тегов
// можно превратить в массив, воспользовавшись методом split, который
// разбивает строки на массивы. После этого, вы можете написать цикл, который
// будет ходить по полученному массиву и проверять каждый из хэш-тегов
// на предмет соответствия ограничениям. Если хотя бы один из тегов не проходит
// нужных проверок, можно воспользоваться методом setCustomValidity для того,
// чтобы задать полю правильное сообщение об ошибке.
// При решении этой задачи обратите внимание на то, что под длиной хэштега
// в 20 символов в ТЗ имеется ввиду длина, включающая символ решетки, поскольку
// решетка является частью тега.



// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить
// к закрытию формы редактирования изображения.

//2.4

var inputHashtags = document.querySelector('.text__hashtags');

var inputDescription = document.querySelector('.text__description');

inputHashtags.addEventListener('keydown', function(evt) {
	if (evt.keyCode == ESC_KEYCODE) {
		evt.stopPropagation();
	}
});

inputDescription.addEventListener('keydown', function(evt) {
	if (evt.keyCode == ESC_KEYCODE) {
		evt.stopPropagation();
	}
});

inputDescription.addEventListener('invalid', function(evt) {
	if (inputDescription.validity.tooLong) {
		inputDescription.setCustomValidity('Много букафф');
	} else {
		userNameInput.setCustomValidity('');
	}
});

// 2.3. Хэш-теги:
var editingForm = document.querySelector('.img-upload__overlay');
var inputHashtags = document.querySelector('.text__hashtags');



// inputHashtags.addEventListener('input', function(evt) {
// 	var tagsMass = inputHashtags.value.split(' ');
// 	//alert(tagsMass.length);
// });



//Разделение однм пробелом, без запятых
var isBadTagsSeparation = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].indexOf(',') !== -1 || array[i] === "") {
			return true;
		}
	}
	return false;
};

// Символа # должен находиться на первом месте тэга , состоять не только из него

var isBadHashPosition = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].indexOf('#') !== 0 || array[i].indexOf('#', 1) !== -1 || array[i].length == 1) {
			return true;
		}
	}
	return false;
};


//проверка длины одного хэштега

var isTooLongTag = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > 20) {
			return true;
		}
	}
	return false;
}

//проверка количества хэштегов
var isTooManyTags = function(array) {
	if (array.length > 5) {
		return true;
	}
	return false;
};

//есть ли повторяющиеся теги
var isTagsRepeat = function(array) {
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] === array[j]) {
				return true;
			}
		}
	}
	return false;
}

//функция проверки всей формы
var onTagsFieldValidate = function() {
	var tags = inputHashtags.value.trim().toLowerCase().split(' ');

	if (isBadTagsSeparation(tags)) {
		inputHashtags.setCustomValidity('Хэш-теги должны разделяться пробелом');
	} else if (isBadHashPosition(tags)) {
		inputHashtags.setCustomValidity('Символ # ставится вначале хэш-тега, используется один раз для одного тега и не может быть единственным.');
	} else if (isTooLongTag(tags)) {
		inputHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов');
	} else if (isTagsRepeat(tags)) {
		inputHashtags.setCustomValidity('Хэш-теги не должны повторяться');
	} else if (tags.length > 5) {
		inputHashtags.setCustomValidity('Нельзя указывать больше 5 хэш-тегов');
	} else {
		inputHashtags.setCustomValidity('');
		inputHashtags.classList.remove('invalid-field');
		//alert('ok');
	}

	if (inputHashtags.value && !inputHashtags.validity.valid) {
		inputHashtags.classList.add('invalid-field');
		//alert("no");
	}
};


editingForm.addEventListener('input', onTagsFieldValidate);




//editingForm.classList.remove('hidden');

// var isBadTagsSeparation = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf('#', 1) !== -1 || arr[i] === '') {
//       return true;
//     }
//   }
//
//   return false;
// };
//
// var isBadTagFormat = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].charAt(0) !== '#' || arr[i].length === 1) {
//       return true;
//     }
//   }
//
//   return false;
// };
//
// var isTooLongTag = function (arr, maxLength) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       return true;
//     }
//   }
//
//   return false;
// };
//
// var isTagsRepeat = function (arr) {
//   var existingElements = {};
//
//   for (var i = 0; i < arr.length; i++) {
//     if (existingElements[arr[i]]) {
//       return true;
//     }
//
//     existingElements[arr[i]] = true;
//   }
//
//   return false;
// };
//
// var onTagsFieldValidate = function () {
//   var tags = tagsField.value.trim().toLowerCase().split(' ');
//
//   if (isBadTagsSeparation(tags)) {
//     tagsField.setCustomValidity('Хэш-теги должны разделяться одним пробелом');
//   } else if (isBadTagFormat(tags)) {
//     tagsField.setCustomValidity('Хэш-тег должен начинаться с символа # и не может состоять только из него');
//   } else if (isTooLongTag(tags, HastagsValidity.MAX_LENGTH)) {
//     tagsField.setCustomValidity('Максимальная длина одного хэш-тега ' + HastagsValidity.MAX_LENGTH + ' символов');
//   } else if (isTagsRepeat(tags)) {
//     tagsField.setCustomValidity('Хэш-теги не должны повторяться');
//   } else if (tags.length > HastagsValidity.MAX_QUANTITY) {
//     tagsField.setCustomValidity('Нельзя указывать больше ' + HastagsValidity.MAX_QUANTITY + ' хэш-тегов');
//   } else {
//     tagsField.setCustomValidity('');
//     tagsField.classList.remove('invalid-field');
//   }
//
//   if (tagsField.value && !tagsField.validity.valid) {
//     tagsField.classList.add('invalid-field');
//   }
// };
//
//
// decreaseBtn.addEventListener('click', onPhotoScale);
// increaseBtn.addEventListener('click', onPhotoScale);
//
// filtersContainer.addEventListener('click', onFilterChange);
//
// uploader.addEventListener('input', onTagsFieldValidate);









//_________________________________________________
// В этом задании мы закончим работу над слайдером, задающим глубину эффекта,
// заставив его перемещаться.
// Теперь, когда вы знакомы с тем, как работает механизм перетаскивания
// элементов, вы можете закончить работу над слайдером.
// Вам нужно описать полный цикл Drag n Drop для пина маркера, то есть добавить
// обработчики событий mousedown, mousemove и mouseup на маркер.
// Обработчики mousemove и mouseup должны добавляться только при вызове
// обработчика mousedown.
// Обработчик mousemove должен запускать логику изменения положения пина: в нём
// должны вычисляться новые координаты пина на основании смещения,
// применяться через стили к элементу и записываться в поле уровня эффекта
// (с поправкой на то, что в это поле записываются координаты середины пина).
// При перемещении, кроме состояния слайдера, должна меняться глубина
// эффекта, наложенного на изображение, то есть меняться значение CSS-фильтра,
// добавленного на изображение. Это нетривиальная задача, потому что значение
// CSS-фильтра записывается в одних границах, а положение слайдера в других.
// Вам нужно использовать пропорцию, чтобы рассчитать насыщенность правильно.
// Учтите, что расчёт координат пина и их запись в поле должны дублироваться
// и в обработчике mouseup, потому что в некоторых случаях, пользователь может
// нажать мышь на слайдере, но никуда его не переместить.
// Ещё один момент касается ограничения перетаскивания: не забудьте сделать так,
// чтобы слайдер можно было двигать только горизонтально и при этом движение
// должно быть ограничено пределами слайдера.

//////САША ПОМОГИ МНЕ!!!! СЛАЙДЕР ДУРИТ ((((( Пытаюсь сделать так, чтобы бегунок не уходил за пределы полосы, но... если ставлю нестрогое равенство или равенство - он замирает навечно

var pinHendler = document.querySelector('.effect-level__pin');
var pinLine = document.querySelector('.effect-level__line');
var effectLevel = document.querySelector('.effect-level__depth');
var effectLevelLine = document.querySelector('.effect-level__line');


var onMouseDown = function(evt) {
	evt.preventDefault();
	//getComputedStyle(pinHendler).cursor = 'pointer';
	pinHendler.style.cursor = 'pointer';
	var effectLevelLineWidth = getComputedStyle(effectLevelLine).width;

	var startCords = {
		x: evt.clientX
	};
	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();
		var newStartCords = {
			x: evt.clientX
		};

		var shift = {
			x: startCords.x - moveEvt.clientX

		};
		if (((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100) <= 0) {
			pinHendler.style.left = 0 + '%';

		} else if (((pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100) >= 100) {
			pinHendler.style.left = 100 + '%';
		} else {
			startCords = {
				x: moveEvt.clientX
			};
			pinHendler.style.left = (pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100 + '%';
			effectLevel.style.width = (pinHendler.offsetLeft - shift.x) / effectLevelLine.offsetWidth * 100 + '%';
		}

		// TODO:
		//отрисовываем новое положение
		// if (pinHendler.offsetLeft < 0) {
		// 	shift.x = 0;
		// 	pinHendler.offsetLeft = 1;
		// } else if (pinHendler.offsetLeft > effectLevelLine.offsetWidth) {
		// 	shift.x = 0;
		// }

		console.log(pinHendler.offsetLeft + " startCords " + startCords.x);
		console.log('evt.clientX' + evt.clientX + " moveEvt.clientX " + moveEvt.clientX);


	};

	var onMouseUp = function(upEvt) {
		upEvt.preventDefault();
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	};
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

}

pinHendler.addEventListener('mousedown', onMouseDown);
