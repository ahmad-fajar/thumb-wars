<template lang="html">
  <div class="">
    <input v-model="item" placeholder="Add an item"/>
    <button @click="addItem">Add item</button>
    <br>
    <input v-model="turn" placeholder="your turn"/>
    <button @click="add">Add item</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: '',
      turn: '',
      login: '',
      msg: 'hallo',
      id: localStorage.getItem('thumbId') || false
    }
  }
}
</script>

<style lang="css">
</style>
