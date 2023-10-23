class RestoPopuler extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section
                id="skip-main-content"
                class="resto-populer padding-x-content padding-y-content"
            >
                <div class="title-section">
                    <h2 class="text-navy text-3xl">
                        <span class="text-yellow">Restoran Populer</span>
                        Pilihan Kami
                    </h2>
                    <p class="text-navy">
                        Nikmati pengalaman kuliner terbaik dengan
                        restoran-restoran yang sangat direkomendasikan
                    </p>
                    <loader-ring></loader-ring>
                </div>
                <div class="resto-populer__wrapper-card">
                </div>
                <button
                    class="resto-populer__btn-view bg-navy text-white"
                    aria-label="Klik untuk dapat melihat semua"
                >
                    Lihat Semua
                </button>
            </section>
        `;
    }
}

customElements.define('resto-populer', RestoPopuler);
