import DrawerInitiator from '../utils/drawer-initiator';
import HeaderInitiator from '../utils/header-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ btnOpen, btnClose, drawer, content, header }) {
        this._btnOpen = btnOpen;
        this._btnClose = btnClose;
        this._drawer = drawer;
        this._content = content;
        this._header = header;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            btnOpen: this._btnOpen,
            btnClose: this._btnClose,
            drawer: this._drawer,
            content: this._content,
        });

        HeaderInitiator.init(this._header);
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLink = document.querySelector('.skip-link');
        const mainContent = document.querySelector('#skip-main-content');
        skipLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(mainContent);
            mainContent.scrollIntoView({ behavior: 'smooth' });
            skipLink.blur();
        });
    }
}

export default App;
