import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3d5b15e781bd744cfecea981b62ff9c8~c5_100x100.jpeg?x-expires=1663506000&x-signature=3YiZxEy9F2easZ9ViDz%2Bs9dljzE%3D"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>NguyenVanB</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>Nguyen Van B</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>6.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
