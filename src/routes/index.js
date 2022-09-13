import config from '~/config';

import { HeaderOnlyDefault } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Feedback from '~/pages/Feedback';

// Route này quản lý các trang không cần đăng nhập vẫn truy cập được
const publicRoutes = [
    // mảng này là nơi mà Dev sẽ tự do định nghĩa các chức năng bằng cách thêm các key vào Object
    // tương ứng
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnlyDefault },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.feedback, component: Feedback, layout: null },
];

// Route này quản lý các trang cần phải đăng nhập vẫn truy cập được. Nếu Click vào thì sẽ bị điều hướng đến trang đăng ký
const privateRoutes = [];

export { publicRoutes, privateRoutes };
