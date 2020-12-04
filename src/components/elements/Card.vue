<template>
    <div class="card">
        <div class="card__title">
            <img alt="lightening" src="@/assets/image/lightening.svg" class="lightening">
            <span>
                {{ card.title }}
            </span>
        </div>
        <div class="card__content">
            {{ card.content }}
        </div>
        <div class="card__footer">
            <router-link
                :to="`/details/${card.id}`"
            >
                see stats
                <img alt="arrow-right" src="@/assets/image/arrow-right.svg" class="arrow-right ml2">
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      card: {
        default: function() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>
