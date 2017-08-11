<template lang="html">

  <div class="container">
    <nav class="navbar navbar-toggleable-md">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Thumb-War</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Team <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Cara bermain
        </button>
      </div>
      <!-- Modal -->
      <Modalhowtoplay></Modalhowtoplay>
      <!-- Modal -->
    </nav>
  </div>

</template>

<script>
import Modalhowtoplay from '@/components/Modalhowtoplay'
export default {
  components: {
    Modalhowtoplay
  }
}
</script>

<style lang="css">
</style>
