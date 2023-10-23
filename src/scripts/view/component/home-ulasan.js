class HomeUlasan extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="ulasan padding-x-content padding-y-content">
                <div class="title-section">
                    <h2 class="text-navy text-3xl">
                        <span class="text-yellow">Ulasan Pengguna</span> Tentang
                        Website Kami
                    </h2>
                    <p class="text-navy">
                        Dengarkan pandangan pengguna tentang kualitas dan
                        kehandalan informasi yang kami sediakan
                    </p>
                </div>
                <div class="ulasan__wrapper-card flex-row">
                    <article class="card-ulasan">
                        <div class="card-ulasan__profile flex-row">
                            <img
                                src="./images/profile/foto-profile-1.png"
                                alt="Foto Profile Pengguna"
                                class="profile-img"
                            />
                            <div class="card-ulasan__nama-profesi text-navy">
                                <h3 class="card-ulasan__nama text-xl">
                                    Ridho Ahmad Fauzi
                                </h3>
                                <p>Mahasiswa</p>
                            </div>
                        </div>
                        <div class="card-ulasan__wrapper-ulasan text-navy">
                            <p>
                                Saya sering bingung mencari restoran yang cocok,
                                tetapi website ini membuatnya mudah.
                            </p>
                        </div>
                    </article>
                    <article class="card-ulasan">
                        <div class="card-ulasan__profile flex-row">
                            <img
                                src="./images/profile/foto-profile-2.jpg"
                                alt="Foto Profile Pengguna"
                                class="profile-img"
                            />
                            <div class="card-ulasan__nama-profesi text-navy">
                                <h3 class="card-ulasan__nama text-xl">
                                    Alamsyah Naim
                                </h3>
                                <p>Food Plogger</p>
                            </div>
                        </div>
                        <div class="card-ulasan__wrapper-ulasan text-navy">
                            <p>
                                Website ini sangat membantu saya dalam
                                menjelajahi restoran-restoran terbaik di kota.
                            </p>
                        </div>
                    </article>
                    <article class="card-ulasan">
                        <div class="card-ulasan__profile flex-row">
                            <img
                                src="./images/profile/foto-profile-3.jpg"
                                alt="Foto Profile Pengguna"
                                class="profile-img"
                            />
                            <div class="card-ulasan__nama-profesi text-navy">
                                <h3 class="card-ulasan__nama text-xl">
                                    Awaludin John
                                </h3>
                                <p>Karyawan</p>
                            </div>
                        </div>
                        <div class="card-ulasan__wrapper-ulasan text-navy">
                            <p>
                                Saya mencintai konsep website ini. Mudah
                                digunakan dan memiliki tampilan yang menarik.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        `;
    }
}

customElements.define('home-ulasan', HomeUlasan);
