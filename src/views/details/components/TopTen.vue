<template>
  <div class="top-ten">
        <div class="title">
            THE TOP 10 JOKES THIS WEEK
        </div>
        <div>
            <div
                class="top-ten__item"
                v-for="(joke, idx) in jokes"
                :key="idx"
            >
                {{ joke }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TopTen",
    data() {
      return {
        jokes: [
          'Smoking Joke',
          'My Boss Joke',
          'Dirty Millionaire Joke',
          'The annoying neighbour',
          'Knock Knock',
          'Why Tyson lisps',
          'The drunk Police officer',
          'My hip dad (Dad joke)',
          'What not to say in an elevator',
        ]
      }
    }
  }
</script>

<style scoped>

</style>
