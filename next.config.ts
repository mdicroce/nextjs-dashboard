import type { NextConfig } from "next";

const nextConfig: Partial<NextConfig> = {
  serverExternalPackages: ["bcrypt"], // Mueve esta línea fuera de `experimental`
  experimental: {
    // Otras opciones experimentales si las tienes
  },
  /* Config options here */
};

export default nextConfig;
