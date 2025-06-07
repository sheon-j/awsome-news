import '@mdi/font/css/materialdesignicons.css'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            default: '#FFFFFF',
            surface: '#f9f9f9',
            inverse: '#000000',
            'grey-highlight': '#f4f4f4',
            'grey-filled': '#e0e0e0',
          },
        },
        dark: {
          colors: {
            default: '#000000',
            inverse: '#FFFFFF',
            'grey-highlight': '#2f2f2f',
            'grey-filled': '#2f2f2f',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
