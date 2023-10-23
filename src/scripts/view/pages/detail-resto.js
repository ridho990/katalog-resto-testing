import '../component/detail-hero';
import '../component/loader-ring';
import '../component/detail-resto';
import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/resto-api';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import postReview from '../../utils/post-reveiw';
import DialogueError from '../../utils/dialogue-error';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const DetailResto = {
    async render() {
        return `
        <detail-hero></detail-hero>
        <loader-ring></loader-ring>
        <div id="likeButtonContainer"></div>
    `;
    },

    async afterRender() {
        try {
            const url = UrlParser.parseActiveUrlWithoutCombiner();
            const resto = await RestoApiSource.detailResto(url.id);
            const detailResto = document.createElement('detail-resto');
            const mainContent = document.querySelector('#mainContent');

            detailResto.setDetailResto = resto;
            mainContent.appendChild(detailResto);

            LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector(
                    '#likeButtonContainer',
                ),
                favoriteResto: FavoriteRestoIdb,
                resto: {
                    id: resto.id,
                    name: resto.name,
                    rating: resto.rating,
                    city: resto.city,
                    description: resto.description,
                    pictureId: resto.pictureId,
                },
            });

            postReview.init({
                id: resto.id,
                btnSubmit: document.getElementById('btn-submit-review'),
            });
        } catch (error) {
            DialogueError.showDialogueError({
                overlay: document.querySelector('.overlay-dialogue'),
                wrapperDialogue: document.querySelector('.card-dialogue-eror'),
            });
            console.error('Error:', error);
        }
    },
};

export default DetailResto;
