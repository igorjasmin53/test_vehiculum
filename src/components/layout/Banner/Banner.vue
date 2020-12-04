<template>
    <div class="banner">
        <div class="title m-auto">
            The Joke Bible
        </div>
        <div class="sub-title m-auto">
            Daily Laughs for you and yours
        </div>
        <SearchBox />
    </div>
</template>

<script>
  import SearchBox from "./components/SearchBox";
  export default {
    name: "Banner",
    components: {
      SearchBox
    }
  }
</script>

<style scoped>

</style>
