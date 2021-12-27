<template>
  <div id="app" class="page">
    <MonthPicker />
  </div>
</template>

<script>
import MonthPicker from "./components/MonthPicker"

export default {
  name: "App",
  components: {
    MonthPicker
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
