class JenisKuliner extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section
                class="jenis-kuliner padding-x-content padding-top-content"
            >
                <div class="title-section">
                    <h2 class="text-navy text-3xl">
                        Eksplorasi Jenis-Jenis
                        <span class="text-yellow">Kuliner</span>
                    </h2>
                    <p class="text-navy">
                        Temukan kelezatan dari berbagai masakan dunia
                    </p>
                </div>
                <div class="jenis-kuliner__wrapper-card flex-row">
                    <article class="card-small card-jenis-kuliner bg-pink">
                        <h3 class="text-xl text-white">Western Resto</h3>
                        <p class="text-white">2 Resto</p>
                        <img
                            src="./images/jenis-kuliner/western.svg"
                            alt="Ilustrasi Makanan Western"
                        />
                    </article>
                    <article class="card-small card-jenis-kuliner bg-yellow">
                        <h3 class="text-xl text-white">Nusantara Resto</h3>
                        <p class="text-white">2 Resto</p>
                        <img
                            src="./images/jenis-kuliner/nusantara.svg"
                            alt="Ilustrasi Makanan Nusantara"
                        />
                    </article>
                    <article class="card-small card-jenis-kuliner bg-navy">
                        <h3 class="text-xl text-white">Chinese Resto</h3>
                        <p class="text-white">2 Resto</p>
                        <img
                            src="./images/jenis-kuliner/chinese.svg"
                            alt="Ilustrasi Makanan Chinese"
                        />
                    </article>
                    <article class="card-small card-jenis-kuliner bg-orange">
                        <h3 class="text-xl text-white">Javanese Resto</h3>
                        <p class="text-white">3 Resto</p>
                        <img
                            src="./images/jenis-kuliner/javanese.svg"
                            alt="Ilustrasi Makanan Javanese"
                        />
                    </article>
                </div>
            </section>
        `;
    }
}

customElements.define('jenis-kuliner', JenisKuliner);
