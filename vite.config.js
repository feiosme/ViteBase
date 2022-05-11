/*
 * @Author: feiosme
 * @LastEditors: 
 * @Description: 
 */
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteSvgIcons({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]'
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src')
        }
    },
    css: {
        modules: {
            generateScopedName: '[hash:base64:10]'
        }
    }
});
