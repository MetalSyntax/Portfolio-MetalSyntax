export const state = () => ({
  locales: ['en', 'es', 'pt'
  /*{
    code: 'es',
    name: 'es'
  },
  {
    code: 'en',
    name: 'en'
  },
  {
    code: 'pt',
    name: 'pt'
  }*/
  ],
  locale: 'en'
  })
  
  export const mutations = {
    SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
    }
  }
  