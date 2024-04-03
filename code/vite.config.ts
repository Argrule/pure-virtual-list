import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'fs'
import path from 'path'

const packageJson = JSON.parse(
    readFileSync('./package.json', { encoding: 'utf-8' }),
)
const globals = {
    ...(packageJson?.dependencies || {}),
}
function resolve(str: string) {
    return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            // input: resolve('src/index.ts'), // 指定入口文件
            // output: {
            //     dir: 'dist',
            //     entryFileNames: '[name].js',
            //     format: 'umd',
            //     name: 'pure-virtual-list',
            //     globals: {
            //         react: 'React',
            //         'react-dom': 'ReactDOM',
            //     },
            // },
            external: ['react', 'react-dom', ...Object.keys(globals)],
        },
        // lib: {
        //     entry: 'src/index.ts',
        //     name: 'pure-virtual-list',
        //     fileName: 'pure-virtual-list'
        // }
        outDir: 'dist',
        lib: {
            // 组件库源码的入口文件
            entry: resolve('src/index.ts'),
            name: 'index',
            fileName: 'index',
            // 打包格式
            formats: ['es', 'cjs'],
        },
    },
})
