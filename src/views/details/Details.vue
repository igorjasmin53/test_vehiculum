<template>
  <div id="details-page">
    <div class="content">
      <div class="controls">
        <router-link
          to="/"
        >
          <back-button />
        </router-link>
      </div>
      <div class="grid-container">
        <div class="d-flex flex-column">
          <div class="detail-box">
            <div class="d-flex justify-content-between detail-box__category-popularity">
              <category-ribbon
                :category="card.category"
              />
              <popularity-label
                :likes="card.likes"
              />
            </div>
            <div class="detail-box__title">
              {{ card.title }}
            </div>
            <p class="detail-box__content">
              {{ card.content }}
            </p>
          </div>
          <div class="detail-stats d-flex justify-content-between">
            <div class="d-flex">
              <stats :card="card" :like="true" />
              <stats :card="card" />
            </div>
            <div class="d-flex justify-content-end align-items-end">
              <button class="arrow-button left">
                <img alt="left-mark" src="@/assets/image/left-mark.svg" class="arrow">
                <span>prev.joke</span>
              </button>
              <button class="arrow-button right ml2">
                <span>next joke</span>
                <img alt="right-mark" src="@/assets/image/right-mark.svg" class="arrow">
              </button>
            </div>
          </div>
        </div>
        <top-ten />
      </div>
    </div>
  </div>
</template>

<script>
  import BackButton from './components/BackButton';
  import TopTen from './components/TopTen';
  import CategoryRibbon from '@/components/elements/CategoryRibbon';
  import PopularityLabel from '@/components/elements/PopularityLabel';
  import Stats from './components/Stats';

  export default {
    name: 'Details',
    props: {
      id: {
        default: 1
      }
    },
    components: {
      BackButton,
      TopTen,
      CategoryRibbon,
      PopularityLabel,
      Stats,
    },
    computed: {
      card() {
        return this.$store.getters.cards[this.id - 1];
      }
    },
    mounted() {
      console.log('id', this.id);
      console.log('card', this.card);
    }
  }
</script>
