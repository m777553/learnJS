import {
	getRandomInteger,
	getRandomIndex,
	createRandomMassive
} from "./../utils/common.js";



const generateEmpjiTitle = () => {
	const emojiTitles = [
		`angry`, `puke`, `sleeping`, `smile`
	];
	return `./images/posters/${emojiTitles[getRandomIndex(emojiTitles)]}`
};

const generateCommentText = () => {
	const commentTexts = [
		`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`
	];
	return commentTexts[getRandomIndex(commentTexts)]
};

const generateAuthor = () => {
	const authors = [
		`Tim Macoveev`, `John Doe`, `Emma Snith`, `Anna Robins`
	];
	return authors[getRandomIndex(authors)]
};

const generateCommentDate = () => {
	//currentDate = Date.now()?????
	const currentDate = new Date();
	let commentDate = new Date();
	const maxDateGap = 7;
	const daysGap = getRandomInteger(maxDateGap, 0);
	commentDate.setDate(currentDate.getDate() - daysGap);
	commentDate.setHours(currentDate.getHours() - 1);
	//const commentDate = new Date(commentDate);
	switch (commentDate.getDate() - currentDate.getDate()) {
		case 0:
			commentDate = `Today`;
			break;
		case 1:
			commentDate = `Yearstaday`;
			break;
		case 2:
		case 3:
		case 4:
			commentDate = `${commentDate.getDate()-currentDate.getDate()}`;
			break;
		case 5:
		case 6:
		case 7:
			commentDate = `${commentDate.toLocaleDateString("en-Us")} ${commentDate.toLocaleTimeString().slice(0,-3)}`;
			break;

			return commentDate
	}
};

const generateComment = () => {

	return {
		emojiImg: generateEmpjiTitle(),
		commentText: generateCommentText(),
		author: generateAuthor(),
		date: generateCommentDate(),

	}
};

export const generateComments = () => {
	const comments = [];
	for (let i = 0; i < getRandomInteger(1,4); i++) {
		comments.push(generateComment());
	}
	return comments
};
