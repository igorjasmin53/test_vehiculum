<template>
    <ul class="popularity-label"
        :style="style"
    >
        <li>
            <span>
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
        return this.likes > 100 ? {
          label: 'EPIC',
          color: '#f33636'
        } : (this.likes > 50 ? {
          label: 'TRENDING',
          color: '#f3a536'
        } : {
          label: 'POPULAR',
          color: '#36aef3'
        })
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
