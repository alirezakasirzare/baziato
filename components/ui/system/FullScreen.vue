<template>
  <button
    class="rounded-full text-gray-600 text-lg h-full flex items-center px-2 btn"
    @click="changeMode"
  >
    <i class="fal" :class="icon"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false,
    }
  },
  computed: {
    icon() {
      return this.fullscreen ? 'fa-compress' : 'fa-expand'
    },
  },

  methods: {
    changeMode() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
        this.fullscreen = true
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
        this.fullscreen = false
      }
    },
  },
}
</script>

<style scoped>
.btn:hover .fal {
  font-weight: bold !important;
}
</style>
