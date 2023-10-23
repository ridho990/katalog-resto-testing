/*
Use Case
1. Tampilkan halaman detail resto.
2. Bila resto ini belum disukai, tampilkan widget untuk menyukai resto. Widget ini berbentuk hati kosong.
3. Bila resto ini sudah disukai, tampilkan widget berbentuk hati penuh. Pengguna dapat membatalkan kesukaannya pada resto ini.

Menyukai Resto.
1. Resto belum disukai.
2. Widget untuk menyukai resto ditampilkan.
3. Widget menyukai resto ditekan oleh pengguna.
4. Resto ditambahkan ke daftar resto yang disukai.
    a. Resto berhasil ditambahkan.
    b. Ternyata resto sudah disukai.
        i. Tidak perlu menyimpan kembali.
    c. Data resto tidak memiliki ID. (Negatif)
        i. Sistem tidak memproses penyimpanan.
        ii. Sistem tidak gagal.

Batal Menyukai Resto.
1. Resto sudah disukai.
2. Widget untuk batal menyukai resto ditampilkan.
3. Widget pembatalan ditekan oleh pengguna.
4. Resto dihapus dari daftar resto yang disukai.
    a. resto berhasil dihapus.
    b. Ternyata resto tidak ada dalam daftar resto yang disukai.

TODO:
1. Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate.
2. Alur negatif: sistem tidak memproses penyimpanan dan menyebabkan kegagalan jika menyimpan resto tanpa ID.
*/

import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // 1. Resto belum disukai.,cek ada tombol like yang garis gak
    it('should show the like button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        expect(
            document.querySelector('[aria-label="like this resto"]'),
        ).toBeTruthy();
    });

    // 2. Widget menyukali resto, cek bukan unliked button
    it('should not show the unlike button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        expect(
            document.querySelector('[aria-label="unlike this resto"]'),
        ).toBeFalsy();
    });

    // 3. Widget menyukai resto ditekan oleh pengguna.
    it('should be able to like the resto', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // Ini coba akses data yang kesimpen
        const resto = await FavoriteRestoIdb.getResto(1);

        // Resto berhasil ditambahkan.
        // Cek data dengan ekspektasi nilai adalah 1
        expect(resto).toEqual({ id: 1 });
        await FavoriteRestoIdb.deleteResto(1);
    });

    // 4b. Ternyata resto sudah disukai.
    //     i. Tidak perlu menyimpan kembali.
    it('should not add a resto again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        await FavoriteRestoIdb.putResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
        await FavoriteRestoIdb.deleteResto(1);
    });

    // 4c. Data resto tidak memiliki ID.
    //     i. Sistem tidak memproses penyimpanan.
    //     ii. Sistem tidak gagal.
    it('should not add a resto when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
