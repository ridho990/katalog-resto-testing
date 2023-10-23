const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('#search-favorite');
    I.see('Belum ada resto favorit', '.message-not-found');
});

/**
 * Buka halaman utama.
 * Pilih salah satu film. Misalnya film pertama.
 * Klik film tersebut.
 * Aplikasi membawa user ke halaman detail film.
 * Kita menekan tombol menyukai film.
 * Kita buka halaman daftar film yang disukai.
 * Kita melihat satu film yang telah disukai.
 */
Scenario('liking one resto', async ({ I }) => {
    I.see('Belum ada resto favorit', '.message-not-found');

    I.amOnPage('/');
    I.seeElement('.profile-resto__name-resto');

    const firstResto = locate('.profile-resto__name-resto').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-info-resto');

    const likedRestoTitle = await I.grabTextFrom('.profile-resto__name-resto');
    assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

/**
 * Buka halaman utama.
 * Pilih salah satu resto. Misalnya resto pertama.
 * Klik resto tersebut.
 * Aplikasi membawa user ke halaman detail resto.
 * Kita menekan tombol menyukai resto.
 * Kita buka halaman daftar resto yang disukai.
 * Kita klik resto yang telah disukai.
 * Aplikasi membawa user ke halaman detail resto
 * Kita menekan tombol batal menyukai resto
 * Kita buka halaman daftar resto yang disukai
 * Kita melihat pesan "belum ada resto favorite"
 */
Scenario('Cancel liking resto', async ({ I }) => {
    I.see('Belum ada resto favorit', '.message-not-found');

    I.amOnPage('/');
    I.seeElement('.profile-resto__name-resto');
    I.click(locate('.profile-resto__name-resto').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    let visibleCardResto = locate('.profile-resto__name-resto');
    let totalVisibleCardResto = await I.grabNumberOfVisibleElements(
        visibleCardResto,
    );
    // Mengecek apakah ada pesan "Belum ada resto favorit" di page favorite
    I.dontSee('.wrapper-message-not-found', '.wrapper-card-favorite');
    // Cek apakah benar ada 1 card
    assert.strictEqual(totalVisibleCardResto, 1);

    I.click(locate('.profile-resto__name-resto').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    visibleCardResto = locate('.profile-resto__name-resto');
    totalVisibleCardResto = await I.grabNumberOfVisibleElements(
        visibleCardResto,
    );
    I.see('Belum ada resto favorit', '.message-not-found');
    // Cek apakah benar ada 0 card
    assert.strictEqual(totalVisibleCardResto, 0);
});

/**
 * Pastikan belum ada film yang disukai.
 * Buka halaman utama.
 * Pilih tiga film untuk disukai.
 * Buka halaman daftar film yang disukai.
 * Pastikan tiga film di atas ditampilkan.
 * Lakukan pencarian terhadap salah satu film.
 * Pastikan hasil pencarian film benar.
 * - Jumlah film sesuai.
 * - Judul film sesuai.
 */

Scenario('searching movies', async ({ I }) => {
    I.see('Belum ada resto favorit', '.message-not-found');

    I.amOnPage('/');
    I.seeElement('.profile-resto__name-resto');

    const titles = [];
    for (let i = 1; i <= 3; i++) {
        I.click(locate('.profile-resto__name-resto').at(i));
        I.wait(1);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        titles.push(await I.grabTextFrom('.profile-resto__name-resto'));
        I.amOnPage('/');
        I.wait(1);
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#search-favorite');
    const visibleCardResto = await I.grabNumberOfVisibleElements(
        '.card-info-resto',
    );
    assert.strictEqual(titles.length, visibleCardResto);

    const searchValue = titles[1].substring(1, 3);
    // Memasukkan karakter ke dalam input
    I.fillField('#search-favorite', searchValue);

    const matchingResto = titles.filter(
        (title) => title.indexOf(searchValue) !== -1,
    );
    const visibleSearchedLikedResto = await I.grabNumberOfVisibleElements(
        '.card-info-resto',
    );

    // Menyamakan apakah jumlah card sama atau tidak
    assert.strictEqual(matchingResto.length, visibleSearchedLikedResto);
});
