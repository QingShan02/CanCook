import withAuth from "next-auth/middleware";

// export {default} from "next-auth/middleware"
export default withAuth(
    async (req, res) => {
        // Xử lý middleware tại đây
    },
    {
        secret: 'seocranet',
    }
);
export const config = { matcher: ["/admin"] }
