import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "fs";
const packageJson = JSON.parse(
    readFileSync("./package.json", { encoding: "utf-8" })
);
const globals = {
    ...(packageJson?.dependencies || {}),
};
const resolve = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
    plugins: [
        react(),
        typescript({
            target: "es2015", // 这里指定编译到的版本，
            rootDir: resolve("src/package/VirtualList"),
            declaration: true,
            declarationDir: resolve("dist"),
            exclude: resolve("node_modules/**"),
            allowSyntheticDefaultImports: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
            external: ["react", "react-dom", ...Object.keys(globals)],
            // external: ["react", "react-dom"],
        },
        lib: {
            // 组件库源码的入口文件
            entry: resolve("src/package/VirtualList/index.tsx"),
            name: "PureVirtualList",
            fileName: (format) => {
                if (format === "es") {
                    return "index.js";                    
                }
                return `index.${format}.js`;
            },
            // 打包格式
            // formats: ["es", "cjs"], //default: ["es", "umd"]
        },
        outDir: "dist",
    },
});
