/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "media.dev.to",
            "media2.dev.to",
            "picsum.photos",
            "skillicons.dev",
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

module.exports = nextConfig;
