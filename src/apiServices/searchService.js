import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
        // encodeURIComponent(searchValue) dùng để mã hóa ký tự do người dùng nhập vào tránh trùng các ký tự như
        // '&', '=' hoặc '?' gây lỗi cho chuỗi ulr API (Query Parameter).
    } catch (error) {}
};
