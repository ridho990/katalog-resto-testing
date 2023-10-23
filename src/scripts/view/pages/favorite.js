import '../component/favorite-hero';
import '../component/favorite-wrapper';
import '../component/card-resto';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import searchBarFavorite from '../../utils/searchbar-favorite';

const Favorite = {
    async render() {
        return `
        <favorite-hero></favorite-hero>
        <favorite-wrapper></favorite-wrapper>
    `;
    },

    async afterRender() {
        const favoriteResto = await FavoriteRestoIdb.getAllResto();
        const wrapperCardFavorite = document.querySelector(
            '.wrapper-card-favorite',
        );
        const wrappperMessageFavorite = document.querySelector(
            '.wrapper-message-not-found',
        );

        if (favoriteResto.length != 0) {
            wrappperMessageFavorite.classList.add('hidden');
        }

        favoriteResto.forEach((resto) => {
            const cardFavorite = document.createElement('card-resto');
            cardFavorite.cardData = resto;
            wrapperCardFavorite.appendChild(cardFavorite);
        });

        searchBarFavorite.init(document.getElementById('search-favorite'));
    },
};

export default Favorite;
