<template lang="html">
  <!-- Second row -->

  <!-- Ini row utama Second row -->
  <div class="row">
  <!-- Jangan dijadiin components -->

    <!-- Ini column pertama -->
    <!-- Kasih aja nama: Skull.vue atau apa aja -->
    <!-- Karena ini column karakter skull -->
    <Skull></Skull>
    <!-- Ini column pertama -->

    <!-- Ini column kedua -->
    <!-- Kasih aja nama: Scoreboard.vue atau apa aja -->
    <!-- Karena ini column score board -->
    <div class="col">

      <div class="row">
        <div class="col">
          <p>
            <h4 class="username"><strong>Score Board</strong></h4>
          </p>
        </div>
      </div>

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
    <!-- Ini column kedua -->

    <!-- Ini column ketiga -->
    <!-- Kasih aja nama: Ghost.vue atau apa aja -->
    <!-- Karena ini column karakter ghost -->
    <Ghost></Ghost>
    <!-- Ini column ketiga -->

  <!-- Ini row utama Second row -->
  </div>
  <!-- Jangan dijadiin components -->

</template>

<script>
import Skull from '@/components/Skull'
import Ghost from '@/components/Ghost'
export default {
  components: {
    Skull,
    Ghost
  }
}
</script>

<style lang="css">
</style>
