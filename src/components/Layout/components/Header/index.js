import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// Tham khảo cách dùng classNames.bind(style) ở đường dẫn bên dưới
//https://www.tabnine.com/code/javascript/functions/classnames/ClassNamesBind/bind
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
