/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        aqua: {
          '100': '#00c08b',
          '200': '#00976D'
        },
        graylight: {
          '100': '#f5f5f5',
          '200': '#e4e4e4',
          '300': '#e2e8f0'
        },
        grayblacked: {
          '100': '#00100b',
          '200': '#001810',
        },
        nuxt: {
          dark: '#002E3B',
          green: '#00C58E',
          gray: '#2F495E',
        },
        dark: {
          surface: '#0c0c0c',
          bg: '#001E26'
        },
        ui: {
          bg: 'var(--ui-bg)',
          'bg-muted': 'var(--ui-bg-muted)',
          'bg-elevated': 'var(--ui-bg-elevated)',
          'bg-accented': 'var(--ui-bg-accented)',
        }
      }
    }
  },
  variants: {},
  plugins: []
}
