<template lang="html">
  <!-- first row -->

    <!-- Ini row utama first row -->
    <div class="row">
    <!-- Jangan dijadiin components -->

      <!-- Ini column pertama -->
      <!-- Ini cuma column kosong, terserah jadiin apa gak -->
      <div class="col">
        <!-- blank -->
        <h1>Player Turn: {{ thumbs[0].gameTurn }}</h1>
      </div>
      <div class="col">
        <div class="row">
          <div v-for="n in 3" class="col">
            <center>
              <a @click="postFirebase(n-1)" class="btn btn-md active" role="button" aria-pressed="true">{{ n-1 }}</a>
            </center>
          </div>
        </div>
        <h2> {{ thumbs[0].player1.playerName }}: {{ thumbs[0].player1.choosedValue }}</h2>
      
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
      game: {
        totalValue: 0,
        gameTurn: 'adith',
        guessedValue: 0,
        player1: {
          playerName: 'fajar',
          thumbWarsID: localStorage.getItem('thumbWarsID') || null,
          choosedValue: 0
        },
        player2: {
          playerName: 'adith',
          thumbWarsID: localStorage.getItem('thumbWarsID') || null,
          choosedValue: 0
        },
        player3: {
          playerName: 'budhi',
          thumbWarsID: localStorage.getItem('thumbWarsID') || null,
          choosedValue: 0
        },
        player4: {
          playerName: 'jason',
          thumbWarsID: localStorage.getItem('thumbWarsID') || null,
          choosedValue: 0
        }
      }
    }
  },
  firebase () {
    return {
      thumbs: this.$db.ref('/thumb-wars/')
    }
  },
  computed: {
    totalValue: function () {
      return this.thumbs[0].player1.choosedValue + this.thumbs[0].player2.choosedValue + this.thumbs[0].player3.choosedValue + this.thumbs[0].player4.choosedValue
    }
  },
  methods: {
    postFirebase: function (val) {
      console.log('masuk')
      this.game.player1.choosedValue = val
      this.$firebaseRefs.thumbs.set({
        isinya: this.game
      })
    }
  }
}
</script>

<style lang="css">
</style>
