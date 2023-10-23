class DetailHero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero-detail-resto padding-x-content">
				<div class="hero-wrapper flex-col"></div>
			</section>
        `;
    }
}

customElements.define('detail-hero', DetailHero);
