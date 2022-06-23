import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const customServicePlugin = () => {
  return {
    name: 'customServicePlugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.originalUrl
        console.log(url)
        if (url.includes('__open-in-editor')) {
          return 'xxx'
        } else {
          next()
        }
      })
    },
  }
}

export default ({ mode }: { mode: string }) => {
  mode = mode === 'development' ? 'dev' : mode
  const env = loadEnv(mode || 'dev', './env')
  console.log('环境信息', env)
  return defineConfig({
    plugins: [vue(), vueJsx(), customServicePlugin()],
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
      port: 3007,
      host: '0.0.0.0',
      proxy: {
        '/router': {
          target: env.VITE_API,
          changeOrigin: true,
        },
      },
    },
  })
}
