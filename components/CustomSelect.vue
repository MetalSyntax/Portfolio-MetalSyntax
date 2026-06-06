<template>
  <div class="relative w-full" v-click-outside="close">
    <div
      class="w-full rounded-xl border border-white/10 bg-gray-800/80 backdrop-blur-md text-gray-200 hover:text-white hover:border-nuxt-green shadow-lg py-3 px-4 outline-none transition-all duration-300 cursor-pointer flex justify-between items-center"
      @click.stop="isOpen = !isOpen"
    >
      <span class="truncate font-medium">{{ selectedLabel }}</span>
      <svg class="w-4 h-4 ml-2 transition-transform duration-300" :class="{ 'transform rotate-180 text-nuxt-green': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute z-50 w-full mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto overflow-x-hidden"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click.stop="selectOption(option)"
          class="px-4 py-3 cursor-pointer text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
          :class="{ 'bg-white/10 text-nuxt-green font-semibold': option.value === value }"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true,
      // Format: [{ label: 'Text', value: 'val' }]
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    selectedLabel() {
      const selected = this.options.find(opt => opt.value === this.value);
      return selected ? selected.label : this.value;
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('input', option.value);
      this.isOpen = false;
    },
    close() {
      this.isOpen = false;
    }
  },
  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        if (typeof document !== 'undefined') {
          el.clickOutsideEvent = function(event) {
            if (!(el == event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
            }
          };
          document.body.addEventListener('click', el.clickOutsideEvent);
        }
      },
      unbind(el) {
        if (typeof document !== 'undefined') {
          document.body.removeEventListener('click', el.clickOutsideEvent);
        }
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
/* Custom Scrollbar */
ul::-webkit-scrollbar {
  width: 6px;
}
ul::-webkit-scrollbar-track {
  background: transparent;
}
ul::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
ul::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
