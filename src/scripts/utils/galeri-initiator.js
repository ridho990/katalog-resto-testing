import CONFIG from '../global/config';

const GaleriInitiator = {
    async init({ galeriImg, overlayTitle, dataResto }) {
        for (const index in dataResto) {
            if (index < 6) {
                galeriImg[
                    index
                ].src = `${CONFIG.BASE_IMAGE_URL}${dataResto[index].pictureId}`;
                galeriImg[
                    index
                ].alt = `Foto galeri resto ${dataResto[index].name}`;
                overlayTitle[index].innerText = dataResto[index].name;
            }
        }
    },
};

export default GaleriInitiator;
