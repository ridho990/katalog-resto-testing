import RestoApiSource from '../data/resto-api';
import { createCardReview } from '../view/templates/template-creator';

const postReview = {
    init({ id, btnSubmit }) {
        btnSubmit.addEventListener('click', async (event) => {
            event.preventDefault();
            await this.renderNewReview(id);
        });
    },

    async getDataForm(id) {
        const name = document.getElementById('input-username').value;
        const review = document.getElementById('input-review-resto').value;
        const objReview = this.createObject({
            _id: id,
            _name: name,
            _review: review,
        });
        const listReview = await RestoApiSource.addReview(objReview);
        this.deleteValueForm({
            formName: document.getElementById('input-username'),
            formReview: document.getElementById('input-review-resto'),
        });
        return listReview;
    },

    createObject({ _id, _name, _review }) {
        return {
            id: _id,
            name: _name,
            review: _review,
        };
    },

    deleteValueForm({ formName, formReview }) {
        formName.value = '';
        formReview.value = '';
    },

    async renderNewReview(id) {
        const newListResto = await this.getDataForm(id);
        const wrapperReview = document.querySelector(
            '.ulasan-pengguna__wrapper-ulasan-form',
        );
        wrapperReview.innerHTML = '';
        newListResto.forEach((resto) => {
            const cardReview = createCardReview(resto);
            wrapperReview.innerHTML += cardReview;
        });
    },
};

export default postReview;
