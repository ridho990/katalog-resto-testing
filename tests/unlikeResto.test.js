/**
Batal Menyukai Resto.
1. Resto sudah disukai.
2. Widget untuk batal menyukai resto ditampilkan.
3. Widget pembatalan ditekan oleh pengguna.
4. Resto dihapus dari daftar resto yang disukai.
    a. resto berhasil dihapus.
    b. Ternyata resto tidak ada dalam daftar resto yang disukai.
 */

import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putResto({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteResto(1);
    });

    // 1. Pastikan resto sudah disukai.
    it('should display unlike widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        expect(
            document.querySelector('[aria-label="unlike this resto"]'),
        ).toBeTruthy();
    });

    // 2. Widget untuk batal menyukai resto ditampilkan.
    it('should not display like widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(
            document.querySelector('[aria-label="like this resto"]'),
        ).toBeFalsy();
    });

    // 3. Widget pembatalan ditekan oleh pengguna.
    it('should be able to remove liked resto from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        document
            .querySelector('[aria-label="unlike this resto"]')
            .dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });

    // 4. Resto dihapus dari daftar resto yang disukai.
    it('should not throw error when user click unlike widget if the unliked resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        // Hapus resto dari daftar resto yang disukai
        await FavoriteRestoIdb.deleteResto(1);
        // Kemudian, simulasikan pengguna menekan widget batal menyukai resto
        document
            .querySelector('[aria-label="unlike this resto"]')
            .dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
