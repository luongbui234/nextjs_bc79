import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "movienew.cybersoft.edu.vn",
        port: '',
        pathname: "**"
      }
    ]
  }
};

export default withFlowbiteReact(nextConfig);