import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                // src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/430c42e71795fd4cb0dd6c51a4d43017~c5_100x100.jpeg?x-expires=1701057600&x-signature=lePcxtqa%2BV1MdlGz7AzIpAyj4y4%3D"
                className={cx('avatar')}
                alt="AAA"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
