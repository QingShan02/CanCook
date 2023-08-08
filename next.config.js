/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    // Các tùy chọn khác của next.config.js...
};
export default nextConfig
