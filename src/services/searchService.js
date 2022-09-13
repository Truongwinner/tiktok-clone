import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
        // encodeURIComponent(searchValue) dùng để mã hóa ký tự do người dùng nhập vào tránh trùng các ký tự như
        // '&', '=' hoặc '?' gây lỗi cho chuỗi ulr API (Query Parameter).
    } catch (error) {
        console.log(error);
    }
};
