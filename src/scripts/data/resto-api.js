import API_ENDPOINT from '../global/api-endpoint';
import DialogueError from '../utils/dialogue-error';

class RestoApiSource {
    static showLoader() {
        const ldRing = document.querySelectorAll('.lds-ring');
        ldRing.forEach((item) => {
            item.style.display = 'inline-block';
        });
    }

    static hideLoader() {
        const ldRing = document.querySelectorAll('.lds-ring');
        ldRing.forEach((item) => {
            item.style.display = 'none';
        });
    }

    static async listResto() {
        return new Promise((resolve, reject) => {
            // Menampilkan loader
            this.showLoader();

            // Menunda respon selama 2 detik
            setTimeout(async () => {
                // Menyembunyikan loader
                this.hideLoader();

                const response = await fetch(API_ENDPOINT.LIST_RESTO);
                const responseJson = await response.json();
                const listResto = responseJson.restaurants.splice(0, 12);
                // const listResto = null; // Untuk test eror

                if (!listResto) {
                    DialogueError.init({
                        btnClose: document.getElementById('btn-close-x'),
                        btnYes: document.getElementById('yes-button'),
                        overlay: document.querySelector('.overlay-dialogue'),
                        wrapperDialogue: document.querySelector(
                            '.card-dialogue-eror',
                        ),
                    });
                    reject(new Error('Gagal mengambil data dari server'));
                }

                resolve(listResto);
            }, 500); // Menunda respon selama 1 detik
        });
    }

    static async detailResto(id) {
        return new Promise((resolve, reject) => {
            // Menampilkan loader
            this.showLoader();

            // Menunda respon selama 2 detik
            setTimeout(async () => {
                // Menyembunyikan loader
                this.hideLoader();

                const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
                const responseJson = await response.json();
                const dataResto = responseJson.restaurant;
                // const dataResto = null; // Test data eror
                if (!dataResto) {
                    DialogueError.init({
                        btnClose: document.getElementById('btn-close-x'),
                        btnYes: document.getElementById('yes-button'),
                        overlay: document.querySelector('.overlay-dialogue'),
                        wrapperDialogue: document.querySelector(
                            '.card-dialogue-eror',
                        ),
                    });
                    reject(new Error('Gagal mengambil data dari server'));
                }

                resolve(dataResto);
            }, 500); // Menunda respon selama 1 detik
        });
    }

    static async addReview(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
        const newListReview = await response.json();
        return newListReview.customerReviews;
    }
}

export default RestoApiSource;
