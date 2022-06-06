<template>
  <button
    class="rounded-full text-gray-600 text-lg h-full flex items-center px-2 btn dark:text-gray-200"
    @click="changeMode"
  >
    <i class="fal" :class="icon"></i>
  </button>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.$colorMode.preference === 'light' ? 'fa-moon' : 'fa-sun'
    },
  },

  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style scoped>
.btn:hover .fal {
  font-weight: bold !important;
}
</style>
