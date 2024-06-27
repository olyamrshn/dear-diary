/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		domains: ["images.omrshn.dev"],
	},
}

export default nextConfig
