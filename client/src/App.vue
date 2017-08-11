<template>
  <div id="app">
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*From own CSS*/
/** {
  border: 1px solid black;
}*/


body {
  background-color: black;
}

img {
  height: 120px;
  width: auto;
}

.score-board {
  background-color: #fff;
  height: 180px;
  width: auto;
  border-radius: 30px;
}

.container {
  width: 50%;
  margin-left: 310px;
}

.container-fluid {
  margin-top: 24px;
}

.col {
  margin: 20px 10px;
}

.col-btn {
  padding: 30px 40px;
}

.navbar {
  border-radius: 50px;
  background-color: #9450BB;
}

.navbar a {
  color: #fff;
}

.btn {
  background-color: #FF9814;
  border-radius: 50px;
  color: #fff;
}

.score-board {
  height: 200px;
  width: auto;
}

.detail-text {
  margin-top: 10px;
}


</style>
