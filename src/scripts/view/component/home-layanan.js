class HomeLayanan extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="layanan padding-x-content padding-y-content">
                <div class="title-section">
                    <h2 class="text-navy text-3xl">
                        Pelayanan <span class="text-yellow">Unggulan Kami</span>
                    </h2>
                    <p class="text-navy">
                        Temukan layanan kami yang memudahkan dan menyenangkan
                        pengalaman makan Anda
                    </p>
                </div>
                <div class="layanan__wrapper-card flex-row">
                    <article class="card-small card-layanan">
                        <img
                            src="./images/layanan/lux.svg"
                            alt="Ilustrasi Pencarian"
                            class="card-layanan__img"
                        />
                        <h3 class="text-xl text-navy">Pencarian Restoran</h3>
                        <p class="text-navy">
                            Mencari restoran berdasarkan berbagai kriteria
                        </p>
                    </article>
                    <article class="card-small card-layanan">
                        <img
                            src="./images/layanan/like.svg"
                            alt="Ilustrasi Pencarian"
                            class="card-layanan__img"
                        />
                        <h3 class="text-xl text-navy">Ulasan</h3>
                        <p class="text-navy">
                            Memberikan ulasan dan peringkat restoran setelah
                            mengunjunginya
                        </p>
                    </article>
                    <article class="card-small card-layanan">
                        <img
                            src="./images/layanan/calender.svg"
                            alt="Ilustrasi Pencarian"
                            class="card-layanan__img"
                        />
                        <h3 class="text-xl text-navy">Reservasi Online</h3>
                        <p class="text-navy">
                            Memesan meja secara online di restoran yang
                            berpartisipasi
                        </p>
                    </article>
                    <article class="card-small card-layanan">
                        <img
                            src="./images/layanan/toa.svg"
                            alt="Ilustrasi Pencarian"
                            class="card-layanan__img"
                        />
                        <h3 class="text-xl text-navy">Informasi Resto</h3>
                        <p class="text-navy">
                            Informasi lengkap tentang setiap restoran
                        </p>
                    </article>
                </div>
            </section>
        `;
    }
}

customElements.define('home-layanan', HomeLayanan);
