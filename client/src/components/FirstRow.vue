<template lang="html">
  <!-- first row -->
    <div class="row">
      <div class="col">
        <!-- blank -->
      </div>
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
      <div class="col">
        <!-- blank -->
      </div>
    </div>
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
