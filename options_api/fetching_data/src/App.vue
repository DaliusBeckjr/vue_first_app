<script>
// script setup cannot have multiple exports
import { RouterLink, RouterView } from 'vue-router'

export default{
  methods: {/* see: https://v3.vuejs.org/api/options-data.html#methods */
    redirect () {
      // another way to redirect the user. wonder if we can do this to a form
      this.$router.push({name: 'home'})
    },
    back () {
      // (-1) means go back through the history
      this.$router.go(-1)
    },
    forward () {
      // this will take us forward
      this.$router.go(1)
    },
  },
}
</script>



<template>
  <header>

    <div >
      <nav>
        <!-- going to have to start lazy loading everything coz index is looking weird -->
        <RouterLink :to="{name: 'home'}">Home</RouterLink> |
        <RouterLink :to="{name: 'about'}">About</RouterLink> |
        <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>
      </nav>

        <!-- programmatic navigation -->
      <button @click="redirect">Redirect</button>
      <button @click="back">Go Back</button>
      <button @click="forward">Go Forward</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: grey;
  text-decoration: none;
  padding: 12px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: whitesmoke;
  background: purple;
}

button {
  margin: .5rem;
  color: white;
  background: purple;
  border: none;
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
