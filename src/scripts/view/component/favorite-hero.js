class FavoriteHero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
			<section class="hero-favorite padding-x-content">
				<div class="hero-wrapper flex-col">
					<h1 class="hero__title text-4xl">
						Resto Favorit
						<span class="text-yellow">Anda</span>
					</h1>
					<p class="hero__description text-white">
						Segera nikmati petualangan kuliner Anda dan buat kenangan tak
						terlupakan bersama kami.
					</p>
				</div>
			</section>
        `;
    }
}

customElements.define('favorite-hero', FavoriteHero);
