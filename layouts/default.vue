<template>
  <div class="flex flex-col justify-between min-h-screen">
    <div class="mb-10">
      <TheHeader />
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head: {
    bodyAttrs: {
      class: 'dark:bg-gray-800 dark:text-white transition-colors',
    },
  },
}
</script>
