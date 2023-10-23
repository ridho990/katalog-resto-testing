import Home from '../view/pages/home';
import Favorite from '../view/pages/favorite';
import DetailResto from '../view/pages/detail-resto';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/favorite': Favorite,
    '/detail/:id': DetailResto,
};

export default routes;
