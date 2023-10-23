const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa-solid fa-heart" aria-hidden="true"></i>
    </button>
`;

const createCardReview = (dataReview) => `
    <article class="ulasan-pengguna__wrapper-ulasan">
        <div class="wrapper-ulasan__name-star-date flex-col">
            <span class="name-star flex-row">
                <h3 class="username-reviewer">${dataReview.name}</h3>
                <span class="stars text-yellow">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </span>
            </span>
            <span class="name-star-date__date flex-row">
                <p class="strip">-</p>
                <p class="date-ulasan">${dataReview.date}</p>
            </span>
        </div>
        <div class="wrapper-ulasan__user-review text-navy">
            <p>
                ${dataReview.review}
            </p>
        </div>
    </article>
`;

export {
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createCardReview,
};
