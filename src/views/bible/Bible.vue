<template>
  <div id="bible-page">
    <div class="content">
      <div class="grid-container">
        <category-button
          v-for="category in categories"
          :key="category.id"
          :category="category"
        ></category-button>
        <button
          class="category-button view-all"
        >
          View All
        </button>
      </div>
      <template v-if="!!selectedCategory">
        <hr />
        <div class="tl">
          <CategoryRibbon
            :category="selectedCategory"
          />
        </div>
        <div class="cards">
          <card
            v-for="card in cards"
            :key="card.id"
            :card="card"
          ></card>
        </div>
        <div class="tc">
          <button class="category-button view-all">
            View More
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import CategoryButton from '@/components/elements/CategoryButton';
  import CategoryRibbon from '@/components/elements/CategoryRibbon';
  import Card from '@/components/elements/Card';
export default {
  name: 'Bible',
  components: {
    CategoryButton,
    CategoryRibbon,
    Card,
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    cards() {
      return this.$store.getters.cards;
    },
    selectedCategory() {
      return this.categories.find(
        category => category.selected
      )
    }
  }
}
</script>
