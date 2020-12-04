<template>
    <ul class="category-ribbon"
        :style="style"
    >
        <li>
            <span>
                {{ category.name }}
            </span>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "CategoryRibbon",
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
