<template lang="html">
  <!-- Second row -->
  <div class="row">
    <div class="col">

      <div class="row">
        <div class="col col-btn">

          <div v-for="n in 3" class="col">
            <center>
              <a @click="postFirebase4(n-1)" class="btn btn-md active" role="button" aria-pressed="true">{{ n-1 }}</a>
            </center>
          </div>
          <h2>{{ thumbs[0].player4.playerName }} : {{ thumbs[0].player4.choosedValue }}</h2>

        </div>

        <div class="col">
          <center>
            <img src="../assets/img/skull.png" alt="pumpkin icon">
          </center>
          <br>
          <center>
            <img src="../assets/img/skull.png" alt="pumpkin icon">
          </center>
        </div>
      </div>

    </div>
    <div class="col">

      <div class="row">
        <div class="col">
          <div class="score-board">

          </div>
        </div>
        <div class="col">
          <div class="score-board">

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <center>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">1</a>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">2</a>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">3</a>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">4</a>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">5</a>
            <a href="#" class="btn btn-md active" role="button" aria-pressed="true">6</a>
          </center>
        </div>
      </div>

    </div>
    <div class="col">

      <div class="row">

        <div class="col">
          <center>
            <img src="../assets/img/ghost.png" alt="pumpkin icon">
          </center>
          <br>
          <center>
            <img src="../assets/img/ghost.png" alt="pumpkin icon">
          </center>
        </div>

        <div class="col col-btn">
          <div v-for="n in 3" class="col">
            <center>
              <a @click="postFirebase2(n-1)" class="btn btn-md active" role="button" aria-pressed="true">{{ n-1 }}</a>
            </center>
          </div>
          <h2>{{ thumbs[0].player2.playerName }} : {{ thumbs[0].player2.choosedValue }}</h2>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondRow',
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
      return this.game.player1.choosedValue + this.game.player2.choosedValue + this.game.player3.choosedValue + this.game.player4.choosedValue
    }
  },
  methods: {
    postFirebase2: function (val) {
      console.log('masuk')
      this.game.player2.choosedValue = val
      this.$firebaseRefs.thumbs.set({
        isinya: this.game
      })
    },
    postFirebase4: function (val) {
      console.log('masuk')
      this.game.player4.choosedValue = val
      this.$firebaseRefs.thumbs.set({
        isinya: this.game
      })
    }
  }
}
</script>

<style lang="css">
</style>
