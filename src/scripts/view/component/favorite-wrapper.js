class FavoriteWrapper extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section id="skip-main-content" class="favorite padding-x-content padding-y-content">
				<div class="favorite__wrapper">
					<div class="wrapper__search-favorite flex-row">
						<input
							type="search"
							name="search"
							id="search-favorite"
							placeholder="Cari resto favorit"
						/>
					</div>
					<div class="wrapper-card-favorite">
					</div>
				</div>
			</section>
        `;
    }
}

customElements.define('favorite-wrapper', FavoriteWrapper);
