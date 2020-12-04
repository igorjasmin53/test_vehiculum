<template>
    <div class="stats" :class="{'like': like}">
        <div class="hand-container d-flex justify-content-center align-items-center">
            <img v-if="like" alt="thumb-up" src="@/assets/image/thumb-up.svg" class="thumb-up">
            <img v-if="!like" alt="thumb-down" src="@/assets/image/thumb-down.svg" class="thumb-down">
        </div>
        <div class="count">
            <template v-if="like">
                {{ card.likes }}
            </template>
            <template v-else>
                {{ card.dislikes }}
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Stats",
    props: {
      like: {
        default: false
      },
      card: {
        default: function() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
