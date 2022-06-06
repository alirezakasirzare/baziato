<template>
  <div>
    <TheHeader />
    <Nuxt />
    <!-- <TheFooter /> -->
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
