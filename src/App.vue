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
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  display: flex;
  justify-content: center;
}
</style>
