const createCommentMarkup(comment) => {
	const {
		emojiImg,
		commentText,
		author,
		date


	} = comment;
	return (`<li class="film-details__comment">
	            <span class="film-details__comment-emoji">
	              <img src="${emojiImg}" alt="emoji-smile" width="55" height="55">
	            </span>
	            <div>
	              <p class="film-details__comment-text">${commentText}</p>
	              <p class="film-details__comment-info">
	                <span class="film-details__comment-author">${author}</span>
	                <span class="film-details__comment-day">${date}</span>
	                <button class="film-details__comment-delete">Delete</button>
	              </p>
	            </div>
	          </li>`)
}

export const createCommentsMarkup(comments) => {

const commentMarckup = comments.map((comment)=>createCommentMarkup(comment)).join(\n);
	return (
		`<ul class="film-details__comments-list">

				${commentMarckup}
			</ul>`)
};
