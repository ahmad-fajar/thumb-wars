<template>

  <div class="col-sm-4 col-sm-offset-4">
    <h2>JOIN</h2>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="username.name"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Join</button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      username: {
        name: ''
      },
      // nama: localStorage.getItem('username'),
      error: ''
    }
  },

  methods: {
    submit () {
      var username = this.username.name
      localStorage.setItem('username', username)
      this.$router.push('Game')
    }
  }

}

</script>