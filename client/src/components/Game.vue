<template lang="html">
  <div class="">
    <Navbar></Navbar>
    <FirstRow></FirstRow>
    <SecondRow></SecondRow>
    <ThirdRow></ThirdRow>
  </div>
</template>

<script>
import Navbar from '@/components/Game'
import FirstRow from '@/components/FirstRow'
import SecondRow from '@/components/SecondRow'
import ThirdRow from '@/components/ThirdRow'
export default {
  components: {
    Navbar,
    FirstRow,
    SecondRow,
    ThirdRow
  }
}
</script>

<style lang="css">
</style>
