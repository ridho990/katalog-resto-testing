const DrawerInitiator = {
    init({ btnOpen, btnClose, drawer, content }) {
        btnOpen.addEventListener('click', (event) => {
            this._toggleDrawer(event, btnOpen, btnClose, drawer);
        });

        btnClose.addEventListener('click', (event) => {
            this._closeDrawer(event, btnOpen, btnClose, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, btnOpen, btnClose, drawer);
        });
    },

    _toggleDrawer(event, btnOpen, btnClose, drawer) {
        event.stopPropagation();
        drawer.classList.add('active-navbar');
        btnOpen.classList.add('active-navbar');
        btnClose.classList.add('active-navbar');
    },

    _closeDrawer(event, btnOpen, btnClose, drawer) {
        event.stopPropagation();
        drawer.classList.remove('active-navbar');
        btnOpen.classList.remove('active-navbar');
        btnClose.classList.remove('active-navbar');
    },
};

export default DrawerInitiator;
