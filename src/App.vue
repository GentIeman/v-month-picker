<template>
  <div id="app">
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
</style>
