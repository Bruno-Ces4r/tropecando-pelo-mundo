/** @type {import('next').NextConfig} */

// GitHub Pages project sites are served from /<repo>/. In CI we set
// NEXT_PUBLIC_BASE_PATH=/guia-do-nomade so links and assets resolve; locally it's empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Produce a fully static site in out/ — no server needed, free to host.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // Static export has no image optimization server.
  images: { unoptimized: true },
  // Emit /pt/index.html rather than /pt.html — plays nicer with static hosts.
  trailingSlash: true,
};

export default nextConfig;
