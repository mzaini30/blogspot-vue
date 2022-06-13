import Inspector from "vite-plugin-vue-inspector"
import Markdown, {meta} from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import yaml from 'vite-plugin-yaml2'
import { defineConfig } from 'vite'
import apply from '@unocss/transformer-directives'
import {presetUno, presetTypography} from 'unocss'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'

const hostname = 'http://localhost:3000/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    yaml(),
    unocss({
      transformers: [
        apply()
      ],
      presets: [
        presetUno(),
        presetTypography()
      ]
    }),
    Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }), 
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        md.use(Prism)
      }
    }),
    Inspector()
  ]
})
