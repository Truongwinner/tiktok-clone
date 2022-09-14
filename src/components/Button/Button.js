import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    text = false,
    textBtn = false,
    uploadBtn = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    to,
    href,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // loại bỏ tính năng Event Listener trên button khi có prop Disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            // key nhận được chứa tên của sự kiện (ví dụ onClick, onMouseUp,...)
            console.log(props[key]);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        uploadBtn,
        text,
        textBtn,
        rounded,
        disabled,
        small,
        large,
    }); // các props được truyền vào Object và được viết dưới dạng Enhanced object literals.
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    textBtn: PropTypes.bool,
    uploadBtn: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
