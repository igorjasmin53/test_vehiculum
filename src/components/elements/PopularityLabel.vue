<template>
    <ul class="popularity-label"
        :style="style"
    >
        <li>
            <span class="text-uppercase">
                {{ popularity.label }}
            </span>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "PopularityLabel",
    props: {
      likes: {
        default: 0
      }
    },
    computed: {
      popularity() {
        return this.dislikes > this.likes ? {
          label: 'chestnut',
          color: '#000000'
        } : (this.likes > 100 ? {
          label: 'hall of fame',
          color: '#f33636'
        } : (this.likes > 50 ? {
          label: 'trending',
          color: '#f3a536'
        } : {
          label: 'new in town',
          color: '#36aef3'
        }))
      },
      style() {
        return {
          color: this.popularity.color
        }
      }
    }
  }
</script>

<style scoped>

</style>
