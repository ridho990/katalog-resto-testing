const HeaderInitiator = {
    init(header) {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-nav-active');
            } else {
                header.classList.remove('bg-nav-active');
            }
        };
    },
};

export default HeaderInitiator;
