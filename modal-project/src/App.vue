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

// challenge
//  - create an extra button to open a different modal
//  - use the dame modal component but pass in a different template (slot)
//  - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)

</script>



<template>
  <h1> {{ title }} </h1>
  <p>welcome...</p>
  <div v-if="showModal">
  <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
  <!-- slots example -->
  <Modal theme="sale" @close="toggleModal">
    <h1>Big Giveaway</h1>
    <p>Don't miss the best sale ever</p>
    <!-- creating a name slot - need to make a template tag -->
    <template v-slot:links>
      <a href="#"> sign up</a>
      <a href="#">more info</a>
    </template>
  </Modal>
  </div>
  <!-- note: can change the key to the button clicked on the @click function 
    like so "@click.alt" for the alt key or "@click.right" for us to right click on the mouse 
  -- click event modifier BP2 -->
  <!-- <button @click="toggleModal"> open Modal </button> -->
  <button @click.alt="toggleModal"> open Modal (alt)</button>
  
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
