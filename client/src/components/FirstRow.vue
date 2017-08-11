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
      <pumpkin/>
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
import Pumpkin from '@/components/Pumpkin'

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
  },
  components: {
    Pumpkin
  }
}
</script>

<style lang="css">
</style>
