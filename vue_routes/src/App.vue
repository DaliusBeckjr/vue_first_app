<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div >
      <nav>
        <RouterLink :to="{name: 'home'}">Home</RouterLink> |
        <RouterLink :to="{name: 'about'}">About</RouterLink> |
        <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>
      </nav>
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
</style>
