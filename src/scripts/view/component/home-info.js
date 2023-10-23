class HomeInfo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="info flex-row padding-x-content padding-y-content">
                <div class="info__wrapper-content flex-col">
                    <h2 class="text-navy text-3xl">
                        Nikmati
                        <span class="text-yellow">Keberagaman Kuliner</span> di
                        Pusat Eksplorasi Rasa Kami
                    </h2>
                    <figure class="info__wrappper-image--mobile">
                        <img
                            src="./images/info/info-img-1.jpg"
                            alt="Foto Restaurant"
                            class="info__img"
                        />
                        <img
                            src="./images/info/info-img-2.jpg"
                            alt="Foto Makanan"
                            class="info__img-circle-one"
                        />
                        <img
                            src="./images/info/info-img-3.jpg"
                            alt="Foto Makanan"
                            class="info__img-circle-two"
                        />
                        <img
                            src="./images/info/info-img-4.jpg"
                            alt="Foto Makanan"
                            class="info__img-circle-three"
                        />
                    </figure>
                    <p class="info__description text-navy">
                        Selamat datang di pusat eksplorasi rasa kami. Temukan
                        berbagai pilihan restoran terbaik di kota, dari masakan
                        lokal yang autentik hingga hidangan internasional yang
                        menggoda selera.
                    </p>
                </div>
                <figure class="info__wrappper-image">
                    <img
                        src="./images/info/info-img-1.jpg"
                        alt="Foto Restaurant"
                        class="info__img"
                    />
                    <img
                        src="./images/info/info-img-2.jpg"
                        alt="Foto Makanan"
                        class="info__img-circle-one"
                    />
                    <img
                        src="./images/info/info-img-3.jpg"
                        alt="Foto Makanan"
                        class="info__img-circle-two"
                    />
                    <img
                        src="./images/info/info-img-4.jpg"
                        alt="Foto Makanan"
                        class="info__img-circle-three"
                    />
                </figure>
            </section>
        `;
    }
}

customElements.define('home-info', HomeInfo);
