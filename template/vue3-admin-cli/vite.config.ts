import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default ({ mode }: { mode: string }) => {
  mode = mode === 'development' ? 'dev' : mode
  const { VITE_API } = loadEnv(mode || 'dev', process.cwd())
  console.log(`请求代理到: ${VITE_API}`)
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3007,
      host: '0.0.0.0',
      // proxy: {
      //     '/router': {
      //         target: VITE_API,
      //         changeOrigin: true
      //     }
      // }
    },
  })
}
