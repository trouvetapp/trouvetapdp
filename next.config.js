/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      'your-project.supabase.co'
    ],
  },
}

module.exports = nextConfig
