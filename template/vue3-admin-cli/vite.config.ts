import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default ({ command, mode }: { [key: string]: string }) => {
    const env = loadEnv(mode, process.cwd())
    console.log('环境配置', env)
    const isBuild = command === 'build'
    return defineConfig({
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                'types': fileURLToPath(new URL('./types', import.meta.url)),
            }
        },
        server: {
            host: '0.0.0.0'
        }
    })

}


