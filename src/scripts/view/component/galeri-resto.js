class GaleriResto extends HTMLElement {
    connectedCallback() {
        this.render();
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
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-2">
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-3">
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-4">
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-5">
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                        <div class="galeri-resto__wrapper-img galeri-6">
                            <img class="galeri-resto__img" />
                            <loader-ring></loader-ring>
                            <div class="overlay-img">
                                <h3 class="overlay-img__nama-resto text-white"></h3>
                            </div>
                        </div>
                    </div>
                </section>
        `;
    }
}

customElements.define('galeri-resto', GaleriResto);
