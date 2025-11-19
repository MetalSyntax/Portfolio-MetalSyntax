export default defineNuxtPlugin(() => {
    const THEME_KEY = 'nuxt-theme' // localStorage key
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    // Determine initial theme
    const saved = localStorage.getItem(THEME_KEY)
    const isDark = saved
        ? saved === 'dark'
        : prefersDark.matches // fallback to OS preference

    // Apply the appropriate class
    const html = document.documentElement
    if (isDark) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    // Expose a helper for the UI
    const setTheme = (mode) => {
        if (mode === 'dark') {
            html.classList.remove('light')
            localStorage.setItem(THEME_KEY, 'dark')
        } else {
            html.classList.add('light')
            localStorage.setItem(THEME_KEY, 'light')
        }
    }

    // Listen to OS changes (auto‑switch when user hasn’t set a manual preference)
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            setTheme(e.matches ? 'dark' : 'light')
        }
    })

    // Provide the helper globally (e.g. via $theme)
    return {
        provide: {
            theme: {
                set: setTheme,
                isDark: () => !html.classList.contains('light')
            }
        }
    }
})