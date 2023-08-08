/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: 'seocranet', // Thay YOUR_SECRET_KEY bằng giá trị khóa bí mật thực sự
    },
}

module.exports = nextConfig;