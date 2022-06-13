import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import {ViteSSG} from 'vite-ssg'
import routes from 'virtual:generated-pages'

export const createApp = ViteSSG(
  App,
  { routes }
)