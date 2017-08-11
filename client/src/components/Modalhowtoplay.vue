<template>
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
                <h5>Jika kamu mendapat giliran pertama</h5>
              </p>
              <p class="text-justify">
                Jika kamu mendapat giliran, hal yang perlu kamu lakukan adalah menebak angka yang kamu inginkan. Tebaklah salah satu dari angka 1 hingga 6. Jika tebakanmu sama dengan jumlah angka yang ditebak oleh lawan-lawanmu, maka kamu akan mendapat 1 poin. Jika kamu melakukan hal yang sama lagi kemudian, maka kamu akan mendapat 2 poin. Dan artinya kamu menang.
              </p>

              <div class="col">
                <img class="score-board" src="../assets/img/scoreboard_blank.png" alt="scoreboard">
                <p class="detail-text" ><strong>Scoreboard tempat kamu menebak angka</strong></p>
              </div>

              <!-- Second -->

              <p class="text-left">
                <h5>Jika player lain yang mendapat giliran</h5>
              </p>
              <p class="text-justify">
                Jika player lain sedang melalukan gilirannya, kamu bisa menebak angka antara 0 hingga 2, disini player lain yang sedang sama sepertimu juga akan menebak angka antara 0 hingga 2. Jika tebakan kalian dijumlahkan dan hasilnya berbeda dengan tebakan player yang sedang mendapat giliran, selamat player yang sedang mendapat giliran tidak mendapatkan poin. Tetapi jika jumlah tebakan kalian sama dengan tebakan player yang sedang mendapat giliran, maka player itu akan mendapat 1 poin. Dan jika player itu mendapat 1 poin lagi, makan pemenang telah ditentukan.
              </p>

              <div class="col">
                <img class="score-board" src="../assets/img/player_turn.png" alt="scoreboard">
                <p class="detail-text" ><strong>Jika ini bukan giliranmu, maka kamu harus menebak antara 0 hinga 2</strong></p>
              </div>

            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Saya siap!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
