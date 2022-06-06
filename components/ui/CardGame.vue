<template>
  <a
    class="transition-colors p-5 rounded-2xl hover:bg-primary dark:hover:bg-yellow-500 group shadow flex flex-col sm:flex-row-reverse justify-center items-center sm:justify-between border-t-2 border-primary-sm dark:border-yellow-300 dark:bg-gray-700"
    href="#"
  >
    <!-- image -->
    <div class="w-24 h-24 card-image flex justify-center items-center">
      <img :src="game.image.path" :alt="game.image.name" class="w-12" />
    </div>

    <!-- text -->
    <h5
      class="text-center block mt-3 sm:mt-0 transition-colors group-hover:text-white text-lg text-gray-600 dark:text-gray-200"
    >
      بازی {{ game.name }}
    </h5>
  </a>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-image {
  background: url('~assets/blob.svg');
  background-size: cover;
}
</style>
