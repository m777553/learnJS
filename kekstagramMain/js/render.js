(function() {


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
		pictureElement.querySelector('.picture__comments').textContent = photoMassiveElem.comments[0].message;

		return pictureElement;
	};



	window.onLoad = function(pictures) {
		//console.log('ok');
		//makePicturesMasive(pictures);
		window.loadedPicturs = pictures;
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < 25; i++) {
			fragment.appendChild(createPictureElement(pictures[i]));
			picturesList.appendChild(fragment);

		}


		//console.log(window.loadedPicturs);
		//После завершения загрузки изображений с сервера покажите блок .img-filters,
		//убрав у него класс .img-filters--inactive
		document.querySelector('.img-filters').classList.remove('img-filters--inactive');



	};
	//очистка отрисованых фото
	var removePhoto = function(item) {
		item.remove();
	};
	window.clearGallery = function() {
		var existingPhotos = document.querySelectorAll('.picture');

		existingPhotos.forEach(removePhoto);
	};


	var onUpdate = function(pictures) {

		var fragment = document.createDocumentFragment();
		for (var i = 0; i < pictures.length; i++) {
			fragment.appendChild(createPictureElement(pictures[i]));
			picturesList.appendChild(fragment);

		}


		//console.log('onUpdate');
		//console.log(window.loadedPicturs);
		//После завершения загрузки изображений с сервера покажите блок .img-filters,
		//убрав у него класс .img-filters--inactive
		document.querySelector('.img-filters').classList.remove('img-filters--inactive');
	};
	window.updatePictures = function(picturesArr) {
		onUpdate(picturesArr);
	};
})();
