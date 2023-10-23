const BtnViewInitiator = {
    init({ btnViewAll, wrapperCard, dataList }) {
        let btnActive = 0;
        btnViewAll.addEventListener('click', () => {
            if (btnActive === 0) {
                wrapperCard.innerHTML = '';
                this._renderResto(dataList, wrapperCard, 12);
                this._renderBtnViewLess(btnViewAll);
                btnActive++;
            } else {
                wrapperCard.innerHTML = '';
                this._renderResto(dataList, wrapperCard, 3);
                this._renderBtnViewMore(btnViewAll);
                btnActive--;
            }
        });
    },

    _renderResto(listResto, wrapperCard, totalResto) {
        for (const index in listResto) {
            if (index < totalResto) {
                const cardResto = document.createElement('card-resto');
                cardResto.cardData = listResto[index];
                wrapperCard.appendChild(cardResto);
            }
        }
    },

    _renderBtnViewMore(btnViewAll) {
        btnViewAll.textContent = 'Lihat Semua';
        btnViewAll.title = 'Klik untuk dapat melihat semua';
    },

    _renderBtnViewLess(btnViewAll) {
        btnViewAll.textContent = 'Lebih Sedikit';
        btnViewAll.title = 'Klik untuk dapat melihat lebih sedikit';
    },
};

export default BtnViewInitiator;
