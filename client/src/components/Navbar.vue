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

          <!-- signup -->
          <li class="nav-item active" v-if="!user.authenticated">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>

          <!-- login - logout -->
          <li class="nav-item active" v-if="!user.authenticated">
            <router-link class="nav-link" to="login">Login</router-link>
          </li>
          <li class="nav-item active" v-if="user.authenticated">
            <router-link class="nav-link" to="login" @click="logout()">Logout</router-link>
          </li>

        </ul>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Cara bermain
        </button>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Pelajari cara bermain game ini dalam sekejap</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
                <h3>Untuk bermain:</h3>
              </p>
              <div class="container-fluid">
                <div class="row">

                  <p class="text-left">
                    <h5>Jika kamu mendapat giliran</h5>
                  </p>
                  <p class="text-justify">
                    Jika kamu mendapat giliran, hal yang perlu kamu lakukan adalah menebak angka yang kamu inginkan. Tebaklah salah satu dari angka 1 hingga 6. Jika tebakanmu sama dengan jumlah angka yang ditebak oleh lawan-lawanmu, maka kamu akan mendapat 1 poin. Jika kamu melakukan hal yang sama lagi kemudian, maka kamu akan mendapat 2 poin. Dan artinya kamu menang.
                  </p>
                  <p>

                  </p>

                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </div>

</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      user: auth.user
    }
  },

  methods: {

    logout () {
      auth.logout()
    }
  }
}
</script>

<style lang="css">
</style>
