<template>
  <section class="container">
    <div>
      <transition-group
        name="staggered-fade"
        tag="ul"
        :css="false"
        class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li
          v-for="(game, index) in searchGames"
          :key="index"
          :data-index="index"
        >
          <CardGame :game="game" />
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'IndexPage',
  data() {
    return {
      searchText: '',
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
          name: 'سلامم',
          url: '',
          image: {
            path: '/img/fill.png',
            name: 'عکس پالت رنگ',
          },
        },
        {
          name: 'حدس زگ',
          url: '',
          image: {
            path: '/img/fill.png',
            name: 'عکس پالت رنگ',
          },
        },
        {
          name: 'حدس رفسق ها',
          url: '',
          image: {
            path: '/img/fill.png',
            name: 'عکس پالت رنگ',
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

  computed: {
    searchGames() {
      const finalSearchText = this.searchText.toLowerCase()
      return this.games.filter((game) =>
        game.name.toLowerCase().includes(finalSearchText)
      )
    },
  },

  mounted() {
    this.$nuxt.$on('searchGame', (text) => {
      this.searchText = text
    })
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: el.firstChild.clientHeight },
          { complete: done }
        )
      }, delay)
    },
    leave(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    },
  },
}
</script>
