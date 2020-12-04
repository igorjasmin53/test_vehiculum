<template>
  <div id="app" class="w-100">
    <TopNav />
    <Banner />
    <router-view/>
    <FooterBanner />
  </div>
</template>

<script>
  import TopNav from "./components/layout/TopNav/TopNav";
  import Banner from "./components/layout/Banner/Banner";
  import FooterBanner from "./components/layout/FooterBanner";

  export default {
    components: {
      TopNav,
      Banner,
      FooterBanner,
    }
  }
</script>

<style>

</style>
