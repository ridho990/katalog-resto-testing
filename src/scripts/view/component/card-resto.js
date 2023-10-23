import CONFIG from '../../global/config';

class cardResto extends HTMLElement {
    set cardData(data) {
        this._cardData = data;
        this.render();
    }

    cutParagraf(paragraf) {
        // Memecah paragraf menjadi array kata-kata
        const words = paragraf.split(' ');

        // Mengambil 8 kata pertama dari array kata-kata
        const sentenceResult = words.slice(0, 8).join(' ');

        return sentenceResult;
    }

    render() {
        const rating = this._cardData.rating;
        const bgColorRating = rating < 4 ? 'bg-red' : 'bg-blue';
        const colorTextReview = rating < 4 ? 'text-red' : 'text-blue';
        const textReview = rating < 4 ? 'Not Good' : 'Very Good';
        const desc = this.cutParagraf(this._cardData.description);

        this.innerHTML = `
			<article class="card-info-resto">
				<div class="card-info-resto__img">
					<img
						src="${CONFIG.BASE_IMAGE_URL}${this._cardData.pictureId}"
						alt="Foto Resto ${this._cardData.name}"
					/>
				</div>
				<div class="card-info-resto__bottom">
					<a  href="/#/detail/${this._cardData.id}" 
                        class="card-info-resto__navigasi"
                        title="Menuju halaman resto ${this._cardData.name}" 
                        aria-label="Menuju ke detail resto ${this._cardData.name}">
						<div class="card-info-resto__rating-info flex-row">
							<span class="rating-resto-angka text-white ${bgColorRating}">${rating}</span>
							<p class="rating-resto-word ${colorTextReview}">${textReview}</p>
							<p class="review-resto text-navy">10k Review</p>
						</div>
						<div class="card-info-resto__profile-resto">
							<h3 class="text-navy profile-resto__name-resto text-2xl">${this._cardData.name}</h3>
							<p class="text-navy profile-resto__city-resto">${this._cardData.city}</p>
							<hr />
						</div>
						<p class="card-info-resto__description text-navy">
							${desc}
						</p>
					</a>
				</div>
			</article>
    `;
    }
}

customElements.define('card-resto', cardResto);
