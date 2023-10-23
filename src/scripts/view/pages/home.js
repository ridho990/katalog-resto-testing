import '../component/home-hero';
import '../component/home-info';
import '../component/home-layanan';
import '../component/jenis-kuliner';
import '../component/resto-populer';
import '../component/galeri-resto';
import '../component/home-ulasan';
import '../component/card-resto';
import RestoApiSource from '../../data/resto-api';
import BtnViewInitiator from '../../utils/btnview-initiator';
import GaleriInitiator from '../../utils/galeri-initiator';
import DialogueError from '../../utils/dialogue-error';

const Home = {
    async render() {
        return `
        <home-hero></home-hero>
        <home-info></home-info>
        <home-layanan></home-layanan>
        <jenis-kuliner></jenis-kuliner>
        <resto-populer></resto-populer>
        <galeri-resto></galeri-resto>
        <home-ulasan></home-ulasan>
    `;
    },

    async afterRender() {
        try {
            const listResto = await RestoApiSource.listResto();
            const wrapperCard = document.querySelector(
                '.resto-populer__wrapper-card',
            );
            const galeriImg = document.querySelectorAll('.galeri-resto__img');
            const overlayTitle = document.querySelectorAll(
                '.overlay-img__nama-resto',
            );
            const earlyTotalList = 3;

            for (const index in listResto) {
                if (index < earlyTotalList) {
                    const cardResto = document.createElement('card-resto');
                    cardResto.cardData = listResto[index];
                    wrapperCard.appendChild(cardResto);
                }
            }

            BtnViewInitiator.init({
                btnViewAll: document.querySelector('.resto-populer__btn-view'),
                wrapperCard: document.querySelector(
                    '.resto-populer__wrapper-card',
                ),
                dataList: listResto,
            });

            GaleriInitiator.init({
                galeriImg: galeriImg,
                overlayTitle: overlayTitle,
                dataResto: listResto,
            });
        } catch (error) {
            DialogueError.showDialogueError({
                overlay: document.querySelector('.overlay-dialogue'),
                wrapperDialogue: document.querySelector('.card-dialogue-eror'),
            });
            console.error('Error:', error);
        }
    },
};

export default Home;
