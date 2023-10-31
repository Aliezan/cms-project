/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['picsum.photos', 'imgx.sonora.id', 'encrypted-tbn0.gstatic.com', 'static.wikia.nocookie.net', 'cdn.britannica.com', 'avatars.akamai.steamstatic.com'],
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
