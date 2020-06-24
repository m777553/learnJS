'use strict';

(function() {






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
	var ESC_KEYCODE = 27;
	var inputHashtags = document.querySelector('.text__hashtags');

	var inputDescription = document.querySelector('.text__description');

	inputHashtags.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ESC_KEYCODE) {
			evt.stopPropagation();
		}
	});

	inputDescription.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ESC_KEYCODE) {
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
		if (inputHashtags.value) {

			if (
				isBadTagsSeparation(tags)

			) {
				inputHashtags.setCustomValidity('Хэш-теги должны разделяться пробелом');
			} else if (
				isBadHashPosition(tags)

			) {
				inputHashtags.setCustomValidity('Символ # ставится вначале хэш-тега, используется один раз для одного тега и не может быть единственным.');
			} else if (
				isTooLongTag(tags)

			) {
				inputHashtags.setCustomValidity('Максимальная длина одного хэш-тега 20 символов');
			} else if (isTagsRepeat(tags)) {
				inputHashtags.setCustomValidity('Хэш-теги не должны повторяться');
			} else if (
				tags.length > 5
			) {
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

		} else {
			inputHashtags.setCustomValidity('');
			inputHashtags.classList.remove('invalid-field');
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

	//отправка формы и закрытие окна редактирования
	var form = document.querySelector('.img-upload__form');
	var btnSubmit = document.querySelector('.img-upload__submit');

	btnSubmit.addEventListener('submit', function(evt) {
		window.backend.save(
			new FormData(form),
			function(response) {
				editingForm.classList.add('hidden');
				evt.preventDefault();
			},

			function(str) {
				window.backend.createErrorPopup(str);
			});
	});






})();
