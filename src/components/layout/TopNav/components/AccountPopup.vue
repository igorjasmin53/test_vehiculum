<template>
    <div class="account-popup">
        <router-link to="#">My published jokes</router-link>
        <hr />
        <router-link to="#">My saved jokes</router-link>
        <hr />
        <router-link to="#">Account Information</router-link>
        <hr />
        <router-link to="#" class="publish">Publish new joke</router-link>
    </div>
</template>

<script>
  export default {
    name: "AccountPopup"
  }
</script>

<style scoped>

</style>
