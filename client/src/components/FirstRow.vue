<template lang="html">
  <!-- first row -->

    <!-- Ini row utama first row -->
    <div class="row">
    <!-- Jangan dijadiin components -->

      <!-- Ini column pertama -->
      <!-- Ini cuma column kosong, terserah jadiin apa gak -->
      <div class="col">
        <!-- blank -->
      </div>

      <!-- Ini column kedua -->
      <!-- Kasih aja nama: Pumpkin.vue atau apa aja -->
      <!-- Karena ini column karakter pumpkin -->
      <div class="col">

        <div class="row">
          <div class="col">
            <center>
              <a href="#" class="btn btn-md active" role="button" aria-pressed="true">0</a>
            </center>
          </div>
          <div class="col">
            <center>
              <a href="#" class="btn btn-md active" role="button" aria-pressed="true">1</a>
            </center>
          </div>
          <div class="col">
            <center>
              <a href="#" class="btn btn-md active" role="button" aria-pressed="true">2</a>
            </center>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <center>
              <img src="../assets/img/pumpkin.png" alt="pumpkin icon">
            </center>
          </div>
          <div class="col">
            <center>
              <img src="../assets/img/pumpkin.png" alt="pumpkin icon">
            </center>
          </div>
        </div>

      </div>
      <!-- Ini column kedua -->

      <!-- Ini column ketiga -->
      <!-- Ini cuma column kosong, terserah jadiin apa gak -->
      <div class="col">
        <!-- blank -->
      </div>

    <!-- Ini row utama Second row -->
    </div>
    <!-- Jangan dijadiin components -->

</template>

<script>
import {db} from '../firebase'
export default {
  name: 'FirstRow',
  data () {
    return {
      msg: ''
    }
  },
  firebase: {
    thumbs: {
      source: db.ref('/turn'),
      cancelCallback (err) {
        console.log(err)
      }
    }
  },
  methods: {
    cobaSet: function () {
      this.$firebaseRefs.thumbs.set({
        msg: this.msg
      })
    }
  }
}
</script>

<style lang="css">
</style>
