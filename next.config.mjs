/** @type {import('next').NextConfig} */
const nextConfig = {
  // EdgeOne Pages serves the static export from `out`.
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
