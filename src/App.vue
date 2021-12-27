<template>
  <div id="app" class="page">
    <MonthPicker v-model="testDate"/>
  </div>
</template>

<script>
import MonthPicker from "./components/MonthPicker"

export default {
  name: "App",
  components: {
    MonthPicker
  },
  data() {
    return {
      testDate: '2021-12-01'
    }
  }
}
</script>

<style>
.page {
  display: flex;
  justify-content: center;
}
</style>
