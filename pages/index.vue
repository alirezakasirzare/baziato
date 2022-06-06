<template>
  <section class="container">
    <ThemeToggler />
    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
      <CardGame v-for="(game, index) in games" :key="index" :game="game" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      games: [
        {
          name: 'دوز پیشرفته',
          url: '',
          image: {
            path: '/img/tic-tac-toe.png',
            name: 'عکس دوز',
          },
        },
        {
          name: 'حدس رنگ ها',
          url: '',
          image: {
            path: '/img/fill.png',
            name: 'عکس پالت رنگ',
          },
        },
      ],
    }
  },
}
</script>
