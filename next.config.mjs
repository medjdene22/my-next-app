/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'media.timeout.com',
                port: '',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'www.thecocktaildb.com',
                port: '',
                pathname: '/images/media/**'
            },
        ]
    }
};

export default nextConfig;
