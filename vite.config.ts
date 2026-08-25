import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig as tanstackDefineConfig } from "@tanstack/react-start/config";
import tailwindcss from "tailwindcss";
import tsConfigPaths from "vite-tsconfig-paths";

export default tanstackDefineConfig(
  defineConfig({
    plugins: [
      TanStackRouterVite(),
      react(),
      tsConfigPaths(),
    ],
  })
);
