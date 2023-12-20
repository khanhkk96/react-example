import classNames from 'classnames/bind';
import {
    ActiveHomeIcon,
    ActiveLiveIcon,
    ActiveUserGroupIcon,
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<ActiveHomeIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<ActiveUserGroupIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<ActiveLiveIcon />}
                ></MenuItem>
            </Menu>

            <SuggestedAccounts label="Suggested accounts"></SuggestedAccounts>
            <SuggestedAccounts label="Following accounts"></SuggestedAccounts>
        </aside>
    );
}

export default Sidebar;
