import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    // props fallback: customFallback là cách viết của ES6 để vẫn vẫn sử dụng tên fallback không bị lỗi khi trùng tên với
    // biến fallback của useState
    // Nó sử dụng kiến thức Distructuring và Default parameter values (Giá trị tham số mặc định - chỉ áp dụng cho hàm) trong ES6
    // Dấu ':' chỉ mang ý nghĩa đổi tên từ fallback thành customFallback để tránh trùng tên biến props
    // Giá trị được gán images.noImage sẽ có ý nghĩa như sau:
    // - Nếu không truyền props fallback từ bên ngoài vào thì giá trị nhận được sẽ là images.noImage
    // - Nếu có truyền props fallback từ bên ngoài vào thì giá trị của fallback sẽ chính là giá trị được truyền từ bên ngoài đó
    //   còn giá trị images.noImage sẽ không được sử dụng nữa.
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
