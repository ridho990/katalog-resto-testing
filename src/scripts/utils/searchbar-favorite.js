const searchBarFavorite = {
    init(searchBar) {
        this.searchCard(searchBar);
    },

    getAllTitle() {
        return document.querySelectorAll('.profile-resto__name-resto');
    },

    getAllCity() {
        return document.querySelectorAll('.profile-resto__city-resto');
    },

    searchCard(searchBar) {
        const allTitle = this.getAllTitle();
        const allCity = this.getAllCity();
        const cardResto = document.querySelectorAll('card-resto');
        searchBar.addEventListener('input', (event) => {
            const value = event.target.value.toLowerCase();
            for (let index = 0; index < allCity.length; index++) {
                const isVisible =
                    allTitle[index].innerText.toLowerCase().includes(value) ||
                    allCity[index].innerText.toLowerCase().includes(value);
                cardResto[index].classList.toggle('hidden', !isVisible);
            }
        });
    },
};

export default searchBarFavorite;
