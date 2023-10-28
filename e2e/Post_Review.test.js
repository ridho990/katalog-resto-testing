const assert = require('assert');

Feature('Post Review');
/**
 * Buka halaman utama
 * Pilih salah satu resto. Misalnya resto pertama.
 * Klik resto tersebut.
 * Aplikasi membawa user ke halaman detail resto
 * Kita mengisi nama dan ulasan
 * Kita menekan tombol submit
 * Kita melihat review yang berhasil disubmit
 */
Scenario('Post a review with name and text review', async ({ I }) => {
    I.amOnPage('/');
    I.click(locate('.profile-resto__name-resto').first());

    I.seeElement('#input-username');
    I.seeElement('#input-review-resto');
    I.seeElement('#btn-submit-review');

    const userName = 'User Test';
    const reviewResto = 'Makanan ini enak banget (Maaf spam, lagi e2e soalnya)';

    I.fillField('#input-username', userName);
    I.fillField('#input-review-resto', reviewResto);
    I.click('#btn-submit-review');

    const lastUserNameTag = locate('.username-reviewer').last();
    const lastUserName = await I.grabTextFrom(lastUserNameTag);
    assert.strictEqual(userName, lastUserName);

    const lastReviewRestoTag = locate('.wrapper-ulasan__user-review p').last();
    const lastReviewResto = (await I.grabTextFrom(lastReviewRestoTag)).trim();
    assert.strictEqual(reviewResto, lastReviewResto);
});
