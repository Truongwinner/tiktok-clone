import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'; // tham khảo cách sử dụng Tippy https://github.com/atomiks/tippyjs-react
import 'tippy.js/dist/tippy.css';

import Search from '../Search';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon, InboxIcon } from '~/components/icons';

// Tham khảo cách dùng classNames.bind(style) ở đường dẫn bên dưới
//https://www.tabnine.com/code/javascript/functions/classnames/ClassNamesBind/bind
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback & Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt={'tiktok'} />
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('imgUploadBtn')}>
                                <Button textBtn uploadBtn leftIcon={<UploadIcon />} to={'/upload'}>
                                    <span>Upload</span>
                                </Button>
                            </div>

                            <Tippy delay={[0, 100]} content="Messages" placement="bottom" offset={[10, 5]}>
                                <div className={cx('current-user')}>
                                    <button className={cx('action-btn', 'action-Icon')}>
                                        <MessageIcon />
                                    </button>
                                </div>
                            </Tippy>

                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom" offset={[10, 2]}>
                                <div className={cx('current-user')}>
                                    <button className={cx('action-btn', 'action-Icon')}>
                                        <InboxIcon />
                                    </button>
                                    <span className={cx('InboxIcon')}>12</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1662480000&x-signature=uViEUoKjwEpgmGP1jk5jnRXtln0%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ae52c1bfaab10cd9d693f9de33e1e60a~c5_100x100.jpeg?x-expires=1662771600&x-signature=vsm8jUmukGYcxko7hZrOJSUxPEE%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
