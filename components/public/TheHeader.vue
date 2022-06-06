<template>
  <header class="mb-10 py-2 shadow border-t-4 border-primary">
    <div class="container flex">
      <!-- name -->
      <h1 class="ml-5 text-lg font-medium">
        <a href="#" class="hover:text-pink-600">بازیاتو</a>
      </h1>

      <!-- input -->
      <div class="px-5 w-full border-r">
        <input
          v-model="searchText"
          type="text"
          class="border-none rounded p-0.5 outline-none text-gray-600 block w-full"
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
