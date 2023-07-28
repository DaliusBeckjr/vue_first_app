<script>

import Modal from './components/Modal.vue';

// this is the options api way
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      header: 'Sign up for the Giveaway',
      text: 'hurry up and grab your swag during the sale',
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
  // methods: {
  //   handleClick() {
  //     console.log(this.$refs.name)
  //     this.$refs.name.classList.add('active')
  //   }
  // }
}

</script>

<template>
  <h1> {{ title }} </h1>
  <p>welcome...</p>
  <div v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <!-- note: can change the key to the button clicked on the @click function 
    like so "@click.alt" for the alt key or "@click.right" for us to right click on the mouse 
  -- click event modifier BP2 -->
  <button @click="toggleModal"> open Modal </button>
  
  <!-- <input type="text" ref="name">
  <button @click="handleClick"> click me </button> -->
</template>

<style scoped>

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  text-align: center;
  margin-top: 60px;
}
</style>
