import CONFIG from '../../global/config';

class DetailResto extends HTMLElement {
    set setDetailResto(dataResto) {
        this._dataResto = dataResto;
        this.render();
    }

    makeList(menu, strOpsional) {
        let result = '';
        menu.forEach((item) => {
            result += `${item.name}${strOpsional}, `;
        });
        return result.replace(/,(?=\s*$)/, '');
    }

    render() {
        const image = CONFIG.BASE_IMAGE_URL + this._dataResto.pictureId;
        const name = this._dataResto.name;
        const rating = this._dataResto.rating;
        const bgColorRating = rating < 4 ? 'bg-red' : 'bg-blue';
        const colorTextReview = rating < 4 ? 'text-red' : 'text-blue';
        const textReview = rating < 4 ? 'Not Good' : 'Very Good';

        const categories = `${this.makeList(
            this._dataResto.categories,
            ' Food',
        )}`;
        const address = `${this._dataResto.address}, ${this._dataResto.city}`;
        const drinkMenu = this.makeList(this._dataResto.menus.drinks, '');
        const foodMenu = this.makeList(this._dataResto.menus.foods, '');
        const review = this._dataResto.customerReviews;

        this.innerHTML = `
            <section id="skip-main-content" class="section-detail-resto padding-x-content">
				<div class="detail-resto">
					<div class="detail-resto__img">
						<img src="${image}" alt="Foto resto ${name}" />
					</div>
					<div class="detail-resto__info-wrapper">
						<div class="info-wrapper__navigasi flex-row text-navy">
							<a href="./index.html" class="text-navy" title="Dari page ${name} menuju home">Home</a>
							<span class="">/</span>
							<p class="">${name}</p>
						</div>
						<div class="info-wrapper__rating-info flex-row">
							<span class="rating-info-angka text-white ${bgColorRating}">${rating}</span>
							<p class="rating-info-word ${colorTextReview}">${textReview}</p>
							<p class="review-resto text-navy">10k Review</p>
						</div>
						<div class="info-wrapper__profile-resto">
							<h1 class="text-navy text-2xl">${name}</h1>
							<h2 class="text-navy text-lg">${categories}</h2>
							<p class="text-navy">${address}</p>
							<hr />
						</div>
						<div class="info-wrapper__desc-n-menu text-navy">
							<p class="desc-n-menu__paragraph">
								${this._dataResto.description}
							</p>
							<div class="desc-n-menu__drink text-navy">
								<h2 class="text-lg">Daftar Minuman</h2>
								<p>${drinkMenu}</p>
							</div>
							<div class="desc-n-menu__food text-navy">
								<h2 class="text-lg">Daftar Makanan</h2>
								<p>${foodMenu}</p>
							</div>
							<hr />
						</div>
						<div class="info-wrapper__ulasan-pengguna text-navy">
							<h2 class="text-lg">Ulasan</h2>
							<div class="ulasan-pengguna__wrapper-ulasan-form">
                                ${review
                                    .map(
                                        (itemReview) => `
                                        <article class="ulasan-pengguna__wrapper-ulasan">
                                            <div class="wrapper-ulasan__name-star-date flex-col">
                                                <span class="name-star flex-row">
                                                    <h3 class="username-reviewer">${itemReview.name}</h3>
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
                                                    <p class="date-ulasan">${itemReview.date}</p>
                                                </span>
                                            </div>
                                            <div class="wrapper-ulasan__user-review text-navy">
                                                <p>
                                                    ${itemReview.review}
                                                </p>
                                            </div>
                                        </article>
                                `,
                                    )
                                    .join('')}
							</div>
							<div class="ulasan-pengguna__wrapper-form">
								<form class="form-ulasan-user flex-col" action="#">
									<input
										type="text"
										id="input-username"
										class="text-navy"
										title="Form nama pemberi ulasan"
										placeholder="Masukan Username"
									/>
									<input
										type="text"
										class="text-navy"
										id="input-review-resto"
										title="Form mengisi ulasan"
										placeholder="Masukan Ulasan"
									/>
									<button
										type="submit"
										class="text-white"
										id="btn-submit-review"
										title="Button submit form ulasan"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
        `;
    }
}

customElements.define('detail-resto', DetailResto);

/**
 * Note For ME
 * Pada dasarnya, ketika Anda menggunakan .map() pada array dan mengembalikan tag HTML dalam
 * fungsi callback, itu menghasilkan array dari elemen-elemen HTML. Menggunakan .join('') setelah
 * map() menggabungkan array elemen HTML tersebut ke dalam satu string, tetapi elemen-elemen dalam
 * array tetap berupa elemen HTML, bukan string biasa. Itulah alasannya kenapa hasil tidak dianggap sebagai string
 */
