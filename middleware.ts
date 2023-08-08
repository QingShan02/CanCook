import withAuth from "next-auth/middleware";

// export {default} from "next-auth/middleware"
export default withAuth(

    {
        secret: 'seocranet',
    }
);
export const config = { matcher: ["/admin", "/admin/article"] }
