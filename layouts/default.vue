<template>
  <div>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <nav class="flex items-center justify-between flex-wrap background_nav p-2 shadow-lg">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <nuxt-link :to="$i18n.path('')">
          <span class="font-semibold hover:text-white text-gray-200 text-xl tracking-tight"><img id="logo" class="h-10 px-2 inline" src="../assets/img/icons/Logo-MS.png" alt="Logo">Wonder Diaz</span>
           </nuxt-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white">
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-md lg:flex-grow my-1">
            <nuxt-link :to="$i18n.path('')" class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4">
                {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('portfolio')" class="font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4">
               {{ $t('links.portfolio') }}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('achievements')" class=" font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4">
              {{ $t('links.achievements') }}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('experience')" class=" font-semibold block lg:inline-block lg:mt-0 link hover:text-white hover-bg rounded mr-4 text-base py-3 px-4">
              {{ $t('links.experience') }}
            </nuxt-link>
          </div>
           <nuxt-link v-if="$i18n.locale === 'es'" :to="`/en` + $route.fullPath"      class="font-semibold button_switch  rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4 py-3 px-4" active-class="none" exact>
            {{ $t('links.english')}}
          </nuxt-link>
          <nuxt-link v-else-if="$i18n.locale === 'en'" :to="`/pt` + $route.fullPath.replace(/^\/[^\/]+/, '')" class="font-semibold button_switch rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4 py-3 px-4" active-class="none" exact>
            {{ $t('links.portuguese')}}
          </nuxt-link>
          <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')"  class="font-semibold button_switch rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4 py-3 px-4" active-class="none" exact>
            {{ $t('links.spanish')}}
          </nuxt-link>
        </div>
      </nav>

    <nuxt />

    <footer class="footer">
    <div class="flex mb-0">
      <div class="w-full inline-flex content-center justify-center background_footer pt-4 p-2 shadow-lg">
        <div class="flex">
        <a class="p-1" href="https://behance.net/MetalSyntax"><img class="icons-social" src="../assets/img/social/behance.png" alt="Behance" height="35" width="35"></a>
        <a class="p-1" href="https://github.com/metalsyntax"><img class="icons-social" src="../assets/img/social/github.png" alt="GitHub" height="35" width="35"></a>
        <a class="p-1" href="https://linkedin.com/in/metalsyntax/"><img class="icons-social" src="../assets/img/social/linkedin.png" alt="Linkedin" height="35" width="35"></a>
        <a class="p-1" href="https://www.instagram.com/metalsyntax/"><img class="icons-social" src="../assets/img/social/instagram.png" alt="Instagram" height="35" width="35"></a>
        <a class="p-1" href="https://twitter.com/MetalSyntax"><img class="icons-social" src="../assets/img/social/twitter.png" alt="Twitter" height="35" width="35"></a>
        <a class="p-1" href="https://www.facebook.com/MetalSyntax1101/"><img class="icons-social" src="../assets/img/social/facebook.png" alt="Facebook" height="35" width="35"></a>
        </div>
      </div>
    </div>
    <div class="flex mb-0">
      <div class="w-full inline-flex content-center justify-center background_footer p-2 shadow-lg">
      <div class="text-sm flex">
            <nuxt-link :to="$i18n.path('')" class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded">
                {{ $t('links.home') }} 
            </nuxt-link>
            <nuxt-link :to="$i18n.path('portfolio')" class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded">
               {{ $t('links.portfolio') }}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('achievements')" class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded">
              {{ $t('links.achievements') }}
            </nuxt-link>
            <nuxt-link :to="$i18n.path('experience')" class="block lg:inline-block lg:mt-0 link-footer hover:text-white text-base p-2 hover-bg rounded">
              {{ $t('links.experience') }}
            </nuxt-link>
          </div>
      </div>
      </div>
      <div class="flex mb-0">
      <div class="w-full background_copy pb-4 p-2 shadow-lg">
        <p class="text-center text-gray-200"> © 2019 Copyright | {{ $t('footer.text') }}</p>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>
    export default {
      head() {
    return {
      link: [
           {
            rel: 'canonical', href: 'https://metalsyntax.000webhostapp.com' + this.$route.path,
            },
          ],
         }
        },
        data() {
            return {
                open: false,
                showNav: false,
                theme: 'theme-light',
                langs: ['en', 'es', 'pt']
            };
        },
        methods: {
            toggle(){
              this.open = !this.open;
              },
              toggleTheme(){
                this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
              }
            },
        computed: {
            }
        }
</script>

<style>
#logo{
  filter: none;
}
.icons-social{
  filter: none;
}
.link{
  color:#00C08B;
}
.link-footer{
  color:#00C08B;
}
.link-footer:hover{
  color:#E2E8F0;
}
.link:hover{
  color:#E2E8F0;
}
.button_switch{
  background: #00C08B;
}
button:focus{
  outline: 0px auto white;
}
/*.button_switch:hover{
  background: #00C08B;
}*/
/*.hover-bg:hover{
  background: #00C08B;
}*/
.background_nav{
  background: #050505;
}
.background_footer{
  background: #0f0f0f;
}
.background_copy{
  background: #050505;
}
</style>
