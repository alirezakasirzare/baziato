<template>
  <header
    class="mb-10 py-2 shadow border-t-4 border-primary dark:border-yellow-500"
  >
    <div class="container flex">
      <!-- name -->
      <h1 class="ml-5 text-lg font-medium">
        <a href="#" class="hover:text-pink-600 dark:hover:text-yellow-500"
          >بازیاتو</a
        >
      </h1>

      <!-- input -->
      <div class="px-5 w-full border-r dark:border-gray-700 transition-colors">
        <input
          v-model="searchText"
          type="text"
          class="transition-colors py-0.5 border-none rounded p-0.5 outline-none px-2 text-gray-600 block w-full dark:bg-gray-800 dark:text-white"
          placeholder="جستجو بازی ..."
        />
      </div>

      <!-- buttons -->
      <div class="flex gap-1">
        <DarkMode />
        <FullScreen />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },

  watch: {
    searchText(text) {
      this.$nuxt.$emit('searchGame', text)
    },
  },
}
</script>
