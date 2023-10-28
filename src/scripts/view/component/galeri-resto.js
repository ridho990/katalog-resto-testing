import CONFIG from '../../global/config';

class GaleriResto extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set dataImgGaleri(dataImg) {
        this._dataImg = dataImg;
        this.afterRender();
    }

    render() {
        this.innerHTML = `
                <section class="galeri-resto padding-x-content padding-y-content">
                    <div class="title-section">
                        <h2 class="text-navy text-3xl">
                            Galeri
                            <span class="text-yellow">Keindahan</span> Restoran Kami
                        </h2>
                        <p class="text-navy">
                            Eksplorasi visual restoran kami melalui foto-foto
                            menawan
                        </p>
                    </div>
                    <div class="galeri-resto__wrapper-galeri">
                        <div class="galeri-resto__wrapper-img galeri-1">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-2">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-3">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-4">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-5">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-6">
                            <img class="lazyload galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                    </div>
                </section>
        `;
    }

    afterRender() {
        this.innerHTML = `
                <section class="galeri-resto padding-x-content padding-y-content">
                    <div class="title-section">
                        <h2 class="text-navy text-3xl">
                            Galeri
                            <span class="text-yellow">Keindahan</span> Restoran Kami
                        </h2>
                        <p class="text-navy">
                            Eksplorasi visual restoran kami melalui foto-foto
                            menawan
                        </p>
                    </div>
                    <div class="galeri-resto__wrapper-galeri">
                        <div class="galeri-resto__wrapper-img galeri-1">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[0].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[0].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[0].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[0].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[0].name}</h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-2">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[1].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[1].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[1].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[1].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[1].name}</h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-3">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[2].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[2].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[2].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[2].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[2].name}</h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-4">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[3].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[3].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[3].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[3].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[3].name}</h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-5">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[4].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[4].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[4].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[4].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[4].name}</h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-6">
                            <picture>
                                <source media="(max-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[5].pictureId}" />
                                <source media="(min-width: 680px)" data-srcset="${CONFIG.BASE_IMAGE_URL.medium}${this._dataImg[5].pictureId}" />
                                <img class="lazyload galeri-resto__img"
                                data-src="${CONFIG.BASE_IMAGE_URL.small}${this._dataImg[5].pictureId}" 
                                alt="Galeri Resto ${this._dataImg[5].name}" />
                            </picture>
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white">${this._dataImg[5].name}</h3>
                            </div>
                        </div>
                    </div>
                </section>
        `;
    }
}

customElements.define('galeri-resto', GaleriResto);
