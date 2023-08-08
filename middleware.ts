import withAuth from "next-auth/middleware";

// export {default} from "next-auth/middleware"
export default withAuth(
    async (req, res) => {
        // Xử lý middleware tại đây
    },
    {
        secret: 'seocranet', // Thay bằng giá trị khóa bí mật thực sự
        // Các tùy chọn khác...
    }
);
export const config = { matcher: ["/admin"] }
