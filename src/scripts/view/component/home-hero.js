class HomeHero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero padding-x-content">
                <div class="hero__wrapper flex-col">
                    <h1 class="hero__title text-4xl">
                        Menggugah Selera,
                        <span class="text-yellow">Menjelajahi Kelezatan</span>
                        Tanpa Batas
                    </h1>
                    <p class="hero__description text-white">
                        Segera nikmati petualangan kuliner Anda dan buat
                        kenangan tak terlupakan bersama kami.
                    </p>
                    <div class="hero__total-user flex-row">
                        <div class="total-user__image-wrapper flex-row">
                            <div class="total-user__image">
                                <img
                                    src="./images/profile/foto-profile-1.png"
                                    alt="Foto Profil Pengguna"
                                />
                            </div>
                            <div class="total-user__image">
                                <img
                                    src="./images/profile/foto-profile-2.jpg"
                                    alt="Foto Profil Pengguna"
                                />
                            </div>
                            <div class="total-user__image">
                                <img
                                    src="./images/profile/foto-profile-3.jpg"
                                    alt="Foto Profil Pengguna"
                                />
                            </div>
                            <div class="total-user__image">
                                <img
                                    src="./images/profile/foto-profile-4.jpg"
                                    alt="Foto Profil Pengguna"
                                />
                            </div>
                            <div class="total-user__image"><p>+</p></div>
                        </div>
                        <p class="total-user__description text-white">
                            2,500 user merasa puas dengan rekomendasi kami
                        </p>
                    </div>
                    <a
                        href="#skip-main-content"
                        class="hero__nav text-white"
                        aria-label="Navigasi ke section konten utama (rekomendasi resto)"
                        >Lihat Semua Restoran
                        <i class="fa-solid fa-arrow-right-long"></i
                    ></a>
                </div>
            </section>
        `;
    }
}

customElements.define('home-hero', HomeHero);
