<template>
  <footer class="footer">
    <!-- Contact Form Section -->
    <section class="w-full bg-ui-bg bg-gradient-to-b py-12 px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl lg:text-3xl text-white font-bold text-center mb-2">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-gray-400 text-center mb-8">{{ $t('contact.subtitle') }}</p>

        <!-- Success State -->
        <div
          v-if="formSuccess"
          class="flex flex-col items-center justify-center py-10 text-center"
        >
          <svg class="w-16 h-16 text-nuxt-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-bold text-white mb-2">{{ $t('contact.successTitle') }}</h3>
          <p class="text-gray-400">{{ $t('contact.successMessage') }}</p>
          <button
            class="mt-6 text-nuxt-green underline underline-offset-2 hover:text-white transition-colors text-sm"
            @click="resetForm"
          >
            {{ $t('contact.send') }} &rarr;
          </button>
        </div>

        <!-- Form -->
        <form v-else novalidate @submit.prevent="submitForm">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <!-- Name -->
            <div>
              <label class="block text-gray-300 text-sm font-medium mb-1" for="contact-name">
                {{ $t('contact.name') }}
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                required
                :placeholder="$t('contact.namePlaceholder')"
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nuxt-green transition-colors"
                :class="{ 'border-red-500': errors.name }"
              />
              <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-gray-300 text-sm font-medium mb-1" for="contact-email">
                {{ $t('contact.email') }}
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                required
                :placeholder="$t('contact.emailPlaceholder')"
                class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nuxt-green transition-colors"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
            </div>
          </div>

          <!-- Message -->
          <div class="mb-4">
            <label class="block text-gray-300 text-sm font-medium mb-1" for="contact-message">
              {{ $t('contact.message') }}
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="5"
              :placeholder="$t('contact.messagePlaceholder')"
              class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nuxt-green transition-colors resize-none"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
          </div>

          <!-- Cloudflare Turnstile -->
          <div v-if="$config.turnstileSiteKey" class="mb-4">
            <div ref="turnstileContainer"></div>
            <p v-if="!turnstileToken && !errors.turnstile" class="text-gray-500 text-xs mt-1">
              {{ $t('contact.turnstileWaiting') }}
            </p>
            <p v-if="turnstileToken" class="text-nuxt-green text-xs mt-1 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {{ $t('contact.turnstileOk') }}
            </p>
            <p v-if="errors.turnstile" class="text-red-400 text-xs mt-1">{{ errors.turnstile }}</p>
          </div>

          <!-- Global Error -->
          <div v-if="formError" class="mb-4 px-4 py-3 bg-red-900/40 border border-red-500/50 rounded-lg text-red-300 text-sm">
            {{ formError }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-nuxt-green text-nuxt-dark font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-nuxt-green/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
              <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              {{ $t('contact.sending') }}
            </span>
            <span v-else>{{ $t('contact.send') }}</span>
          </button>
        </form>
      </div>
    </section>

    <!-- Social Links -->
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-ui-bg pt-6 p-4 shadow-lg"
      >
        <div class="flex gap-4">
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://linktr.ee/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/linktree.png"
              alt="Linktree"
              height="35"
              width="35"
            />
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://behance.net/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/behance.png"
              alt="Behance"
              height="35"
              width="35"
            />
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://github.com/metalsyntax" target="_blank">
            <img
              class="icons-social invert"
              src="../assets/img/social/github.png"
              alt="GitHub"
              height="35"
              width="35"
            />
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="https://x.com/MetalSyntax" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/twitterx.png"
              alt="Twitter"
              height="35"
              width="35"
            />
          </a>
          <a class="p-1 hover:scale-110 transition-transform duration-300" href="mailto:wonderdxk@gmail.com" target="_blank">
            <img
              class="icons-social"
              src="../assets/img/social/gmail.png"
              alt="Gmail"
              height="35"
              width="35"
            />
          </a>
          <a
            class="p-1 hover:scale-110 transition-transform duration-300"
            href="https://api.whatsapp.com/send?phone=584123654728"
            target="_blank"
          >
            <img
              class="icons-social"
              src="../assets/img/social/whatsapp.png"
              alt="WhatsApp"
              height="35"
              width="35"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- Navigation Links -->
    <section class="flex mb-0">
      <div
        class="w-full inline-flex content-center justify-center bg-ui-bg p-2 shadow-lg"
      >
        <div class="font-semibold text-sm flex flex-wrap justify-center">
          <nuxt-link
            :to="localePath('/')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t('links.home') }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/portfolio')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t('links.portfolio') }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/achievements')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t('links.achievements') }}</nuxt-link
          >
          <nuxt-link
            :to="localePath('/experience')"
            class="link-footer-style hover:text-nuxt-green transition-colors"
            >{{ $t('links.experience') }}</nuxt-link
          >
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="flex mb-0">
      <div class="w-full bg-ui-bg pb-4 p-2">
        <p class="text-center text-gray-500 text-sm">
          ©{{ new Date().getFullYear() }} | {{ $t('footer.text') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      form: { name: '', email: '', message: '' },
      errors: {},
      formError: '',
      formSuccess: false,
      isSubmitting: false,
      turnstileToken: '',
      widgetId: null
    }
  },
  mounted() {
    if (process.client) {
      this.$nextTick(() => {
        this.loadTurnstile()
      })
    }
  },
  beforeDestroy() {
    if (process.client && window.turnstile && this.widgetId !== null) {
      window.turnstile.remove(this.widgetId)
    }
  },
  methods: {
    loadTurnstile() {
      const siteKey = this.$config.turnstileSiteKey
      if (!siteKey) return

      if (window.turnstile) {
        this.renderWidget(siteKey)
      } else {
        const interval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(interval)
            this.renderWidget(siteKey)
          }
        }, 150)
      }
    },
    renderWidget(siteKey) {
      if (!this.$refs.turnstileContainer) return
      this.widgetId = window.turnstile.render(this.$refs.turnstileContainer, {
        sitekey: siteKey,
        theme: 'dark',
        callback: (token) => { this.turnstileToken = token },
        'expired-callback': () => { this.turnstileToken = '' },
        'error-callback': () => { this.turnstileToken = '' }
      })
    },
    validate() {
      const e = {}
      if (!this.form.name.trim()) e.name = this.$t('contact.name') + ' *'
      if (!this.form.email.trim()) {
        e.email = this.$t('contact.email') + ' *'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        e.email = this.$t('contact.emailPlaceholder')
      }
      if (!this.form.message.trim()) e.message = this.$t('contact.message') + ' *'
      if (this.$config.turnstileSiteKey && !this.turnstileToken) {
        e.turnstile = this.$t('contact.turnstileRequired')
      }
      this.errors = e
      return Object.keys(e).length === 0
    },
    async submitForm() {
      this.formError = ''
      if (!this.validate()) return

      this.isSubmitting = true
      try {
        const payload = {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        }
        if (this.turnstileToken) {
          payload['cf-turnstile-response'] = this.turnstileToken
        }

        const res = await fetch('https://formspree.io/f/xbdbwaqg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        })

        if (res.ok) {
          this.formSuccess = true
        } else {
          const data = await res.json().catch(() => ({}))
          const fieldError = data && data.errors && data.errors[0] && data.errors[0].message
          this.formError = (data && data.error) || fieldError || this.$t('contact.errorMessage')
          this.resetTurnstile()
        }
      } catch (_) {
        this.formError = this.$t('contact.errorMessage')
        this.resetTurnstile()
      } finally {
        this.isSubmitting = false
      }
    },
    resetTurnstile() {
      if (window.turnstile && this.widgetId !== null) {
        window.turnstile.reset(this.widgetId)
      }
      this.turnstileToken = ''
    },
    resetForm() {
      this.form = { name: '', email: '', message: '' }
      this.errors = {}
      this.formError = ''
      this.formSuccess = false
      this.turnstileToken = ''
      this.$nextTick(() => {
        if (window.turnstile && this.widgetId !== null) {
          window.turnstile.reset(this.widgetId)
        }
      })
    }
  }
}
</script>

<style>
.icons-social {
  filter: none;
}
.link-footer-style {
  @apply block text-gray-400 text-base p-2 rounded;
}
@media (min-width: 1024px) {
  .link-footer-style {
    @apply inline-block mt-0;
  }
}
</style>
