import withAuth from "next-auth/middleware";

// export {default} from "next-auth/middleware"
export default withAuth(

    {
        secret: 'seocranet',
    }
);
export const config = {
    matcher: [
        { src: "/admin", dest: "/admin" },
        { src: "/admin/article", dest: "/admin/article" },
        { src: "/admin/article/create", dest: "/admin/article/create" }
    ]
}
