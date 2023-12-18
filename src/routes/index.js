import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/Layout/components/Search';
import config from '~/config';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
