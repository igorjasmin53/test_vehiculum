<template>
    <button
        class="category-button"
        :style="style"
    >
        {{ category.name }}
    </button>
</template>

<script>
  export default {
    name: "CategoryButton",
    props: {
      category: {
        default: function() {
          return {
            name: 'social jokes'
          };
        }
      }
    },
    computed: {
      style() {
        return {
          backgroundColor: this.category.color
        }
      }
    }
  }
</script>

<style scoped>

</style>
