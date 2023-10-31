/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['picsum.photos', 'imgx.sonora.id', 'encrypted-tbn0.gstatic.com', 'static.wikia.nocookie.net'],
    },
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
