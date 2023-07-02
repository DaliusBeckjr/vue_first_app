<script >
  export default {
    name: 'app',
    data() {
      return {
        title: 'My First vue app :)'
      }
    }
  }
</script>

<template>

    <div class="wrapper">
      <h1> {{ title }}</h1>
    </div>

</template>

<style scoped>
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

/* part of the preset  */
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
