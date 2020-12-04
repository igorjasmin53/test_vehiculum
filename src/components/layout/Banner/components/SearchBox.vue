<template>
    <div>
        <div class="search-box" :class="{active}" ref="showResults" @click.stop="setActive">
            <input
                placeholder="How can we make you laugh today?"
            />
            <Magnifier class="magnifier" @click="showResults" />
        </div>
        <div class="search-results" ref="results">
            <div data-popper-arrow></div>
            <div v-for="(card, idx) in cards" :key="card.id">
                <hr v-if="idx > 0"/>
                <div class="d-flex align-items-center">
                    <Lightening class="lightening" :style="{color: card.category.color}" />
                    <router-link :to="`/details/${card.id}`">{{ card.title }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {createPopper} from '@popperjs/core'
  import Magnifier from './Magnifier';
  import Lightening from './Lightening';

  export default {
    name: "SearchBox",
    components: {
      Lightening,
      Magnifier,
    },
    data() {
      return {
        active: false,
        events: {
          'click': this.unsetActive.bind(this)
        }
      }
    },
    mounted() {
      for (let event in this.events) {
        if (Object.hasOwnProperty.call(this.events, event)) {
          document.addEventListener(event, this.events[event]);
        }
      }

      this.$nextTick(() => {
        setTimeout(() => { // workaround to fix width issue
          createPopper(this.$refs["showResults"], this.$refs["results"], {
            placement: 'bottom-start',
            modifiers: [
              {
                name: 'arrow',
                options: {
                  padding: 5, // 5px from the edges of the popper
                },
              },
              {
                name: 'offset',
                options: {
                  offset: [0, 16],
                },
              },
              {
                name: "sameWidth",
                enabled: true,
                fn: ({state}) => {
                  state.styles.popper.width = `${state.rects.reference.width}px`;
                },
                phase: "beforeWrite",
                requires: ["computeStyles"],
              }
            ]
          });
        }, 500);
      });
    },
    beforeDestroy() {
      for (let event in this.events) {
        if (Object.hasOwnProperty.call(this.events, event)) {
          document.removeEventListener(event, this.events[event]);
        }
      }
    },
    methods: {
      setActive() {
        this.active = true;
      },
      unsetActive() {
        this.hideResults();
        this.active = false;
      },
      showResults(e) {
        e.stopPropagation();
        this.$refs["results"].setAttribute('data-show', '');
      },

      hideResults() {
        this.$refs["results"].removeAttribute('data-show');
      },
    },
    computed: {
      cards() {
        return this.$store.getters.cards;
      },
    },
    watch: {
      '$route.path'() {
        this.unsetActive();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
