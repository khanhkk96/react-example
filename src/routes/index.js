import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/Layout/components/Search';
import routeConfig from '~/config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.following,
        component: Following,
    },
    {
        path: routeConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: routeConfig.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
