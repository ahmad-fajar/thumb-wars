<template lang="html">
  <!-- Second row -->
  <div class="row">


    <div class="col">

      <div class="row">
        <div class="col">
          <h2 class="username">{{ thumbs[0].player4.playerName }} : {{ thumbs[0].player4.choosedValue }}</h2>
        </div>
      </div>

      <div class="row">
        <div class="col col-btn">

          <div v-for="n in 3" class="col">
            <center>
              <a @click="updateFirebase4(n-1)" class="btn btn-md active" role="button" aria-pressed="true">{{ n-1 }}</a>
            </center>
          </div>
          <!-- <h2>{{ thumbs[0].player4.playerName }} : {{ thumbs[0].player4.choosedValue }}</h2> -->

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
          <h2 class="username">Score Board</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="score-board">

          </div>
        </div>
        <div class="col">
          <div class="score-board">
            <h1>TOTAL</h1>
            <h1>{{ thumbs[0].totalValue}}</h1>
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
          <h2 class="username">{{ thumbs[0].player2.playerName }} : {{ thumbs[0].player2.choosedValue }}</h2>
        </div>
      </div>

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
              <a @click="updateFirebase2(n-1)" class="btn btn-md active" role="button" aria-pressed="true">{{ n-1 }}</a>
            </center>
          </div>
          <!-- <h2>{{ thumbs[0].player2.playerName }} : {{ thumbs[0].player2.choosedValue }}</h2> -->
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
      return this.thumbs[0].player1.choosedValue + this.thumbs[0].player2.choosedValue + this.thumbs[0].player3.choosedValue + this.thumbs[0].player4.choosedValue
    }
  },
  methods: {
    updateFirebase2: function (val) {
      var thumbRef = this.$db.ref('thumb-wars')
      thumbRef.child('isinya/player2/choosedValue').set(val)
      thumbRef.child('isinya/totalValue').set(this.totalValue)
    },
    updateFirebase4: function (val) {
      var thumbRef = this.$db.ref('thumb-wars')
      thumbRef.child('isinya/player4/choosedValue').set(val)
      thumbRef.child('isinya/totalValue').set(this.totalValue)
    }
  }
}
</script>

<style lang="css">
</style>
