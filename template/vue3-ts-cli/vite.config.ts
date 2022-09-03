import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default ({ mode }: { mode: string }) => {
  mode = mode === 'development' ? 'dev' : mode
  const env = loadEnv(mode || 'dev', './env')
  console.log('环境信息', env)
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ['@import "@/themes/index.scss";'].join('\n'),
          javascriptEnabled: true,
        },
      },
    },
    envDir: './env',
    server: {
      port: 3009,
      host: true,
      proxy: {
        '/xxxx': {
          target: env.VITE_API,
          changeOrigin: true,
        },
      },
    },
  })
}
