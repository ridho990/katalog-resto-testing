import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
    btnOpen: document.querySelector('.btn-humburger'),
    btnClose: document.querySelector('.btn-x-navbar'),
    drawer: document.querySelector('.header__navbar'),
    content: document.querySelector('#mainContent'),
    header: document.querySelector('.header'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', async () => {
    app.renderPage();
    await swRegister();
});
