<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ thumbs[0]['.value'] }}</h1>
    <input v-model="msg" type="text">
    <button @click="coba" name="button">lanjut</button>
    <br><br>
    <input v-model="msg2" type="text">
    <button @click="cobaSet" name="button">msg2</button>
    <hr>
    <hr>
    <button @click="tambah" name="button">player 1</button>
    <br><br>
    <button @click="tambah" name="button">player 2</button>
    <router-view></router-view>
  </div>
</template>

<script>
import {db} from './firebase'
export default {
  name: 'app',
  data () {
    return {
      turn: 'a',
      msg: '',
      msg2: '',
      unique: localStorage.getItem('unique') || null
    }
  },
  methods: {
    coba: function () {
      this.$firebaseRefs.thumbs.push({
        text: this.msg
      })
    },
    cobaSet: function () {
      this.$firebaseRefs.thumbs.set({
        isinya: this.msg2
      })
    },
    tambah: function () {
      if (this.unique === this.turn) {
        this.jalankan()
      } else {
        alert(`it's not your turn`)
      }
    },
    jalankan: function () {
      console.log(`jalan`)
    }
  },
  firebase: {
    thumbs: {
      source: db.ref('/turn'),
      cancelCallback (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>
